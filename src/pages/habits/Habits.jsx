import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Header from "../../components/header/Header";
import AddHabit from "../../components/addHabit/AddHabit";
import { H3Styled } from "./HabitsStyled";
import Footer from "../../components/Footer/Footer";
import HabitForm from "../../components/habitForm/HabitForm";

export default function Habits() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const storedUser = localStorage.getItem("user");
    useEffect(() => {

        if (storedUser) {
            const userObject = JSON.parse(storedUser);
            if (userObject.token) {
                setUser(userObject);
                return;
            }
        }
        navigate(`/`);
    }, []);


    function handleAddHabitClick() {
        setShowForm(!showForm);
    }

    function handleSave() {
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
            <H3Styled>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</H3Styled>

            <Footer />
        </>
    );
}
