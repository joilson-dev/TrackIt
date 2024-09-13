import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Header from "../../components/header/Header";
import AddHabit from "../../components/addHabit/AddHabit";
import { H3Styled, HabitsConteiner, SpinnerContainer } from "./HabitsStyled";
import Footer from "../../components/Footer/Footer";
import HabitForm from "../../components/habitForm/HabitForm";
import Habit from "../../components/habit/Habit";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export default function Habits() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const storedUser = localStorage.getItem("user");
    const [habits, setHabits] = useState([]);
    const [loading, setLoadings] = useState(true)

    useEffect(() => {
        if (storedUser) {
            const userObject = JSON.parse(storedUser);
            if (userObject.token) {
                setUser(userObject);
                getHabits(userObject.token);
            } else {
                navigate(`/`);
            }
        } else {
            navigate(`/`);
        }
    }, [setUser, navigate]);

    //
    function getHabits(token) {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(URL, config)
            .then((res) => {
                setHabits(res.data);
                console.log(res.data)
                setLoadings(false)
            })
            .catch((err) => {
                console.error("Erro ao buscar hábitos:", err.response?.data);
                setLoadings(false)
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

    return (
        <>
            <Header />
            <AddHabit onAddHabitClick={handleAddHabitClick} />
            {showForm && <HabitForm onSave={handleSave} onCancel={handleCancel} />}
            <HabitsConteiner>
                {loading ? (
                    <SpinnerContainer>

                        <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#193950"
                            radius="9"
                            ariaLabel="three-dots-loading"
                        />
                    </SpinnerContainer>
                ) : habits.length > 0 ? (
                    habits.map((habit) => (
                        <Habit
                            key={habit.id}
                            id={habit.id}
                            name={habit.name}
                            days={habit.days}
                        />
                    ))
                ) : (
                    <H3Styled>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</H3Styled>
                )}
            </HabitsConteiner>

            <Footer />
        </>
    );
}
