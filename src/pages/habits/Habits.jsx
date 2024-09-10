import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Header from "../../components/header/Header";
import AddHabit from "../../components/addHabit/AddHabit";

export default function Habits() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            const userObject = JSON.parse(storedUser);
            if (userObject.token) {
                setUser(userObject);
                return;
            }
        }

        navigate(`/`);
    }, []);

    return (
        <>
            <Header />
            <AddHabit />
        </>
    );
}
