import { useContext } from "react";
import UserContext from "../../contexts/UserContext";


export default function Habits() {
    const { user } = useContext(UserContext);

    console.log(user)
    return (
        <>
            <p>habitos</p>
        </>
    )

}