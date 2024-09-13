import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Header from "../../components/header/Header";
import AddHabit from "../../components/addHabit/AddHabit";
import HabitForm from "../../components/habitForm/HabitForm";
import HabitDay from "./HabitDay";


export default function Today() {
    const [showForm, setShowForm] = useState(false);
    const storedUser = localStorage.getItem("user");
    const [habits, setHabits] = useState([]);


    useEffect(() => {

        if (storedUser) {
            const userObject = JSON.parse(storedUser);
            if (userObject.token) {
                getToday(userObject.token);
            } else {
                navigate(`/`);
            }
        } else {
            navigate(`/`);
        }
    }, []);

    console.log(storedUser.token)

    //
    function getToday(token) {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(URL, config)
            .then((res) => {
                setHabits(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.error("Erro ao buscar Today", err.response?.data);
            });
    }
    //
    function handleAddHabitClick() {
        setShowForm(!showForm);
    }

    function handleSave(newHabit) {
        setHabits((prevHabits) => [...prevHabits, newHabit]);
        setShowForm(false);
    }

    function handleCancel() {
        setShowForm(false);
    }

    function onClickDone(habitId, done) {
        const userObject = JSON.parse(storedUser);

        const URL = done
            ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`
            : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`;

        const config = {
            headers: {
                Authorization: `Bearer ${userObject.token}`
            }
        };

        axios.post(URL, {}, config)
            .then((res) => {
                const action = done ? "desmarcado" : "marcado";
                console.log(`Hábito ${habitId} ${action} como feito.`);
                getToday(userObject.token);
            })
            .catch((err) => {
                console.error(`Erro ao ${done ? "desmarcar" : "marcar"} hábito`, err.response?.data);
            });
    }


    return (
        <>
            <Header />
            <AddHabit onAddHabitClick={handleAddHabitClick} />
            {showForm && <HabitForm onSave={handleSave} onCancel={handleCancel} />}

            {habits.map((habit) => (
                <HabitDay
                    key={habit.id}
                    id={habit.id}
                    name={habit.name}
                    done={habit.done}
                    currentSequence={habit.currentSequence}
                    highestSequence={habit.highestSequence}
                    onClickDone={onClickDone}
                >
                </HabitDay>
            ))}

            <Footer />
        </>
    );
}
