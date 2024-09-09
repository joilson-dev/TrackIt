import { BrowserRouter, Route, Routes } from "react-router-dom"
import SingUp from "../pages/singUp/SingUp"
import SingIn from "../pages/singIn/SingIn"
import Habits from "../pages/habits/Habits"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingIn />} />
                <Route path="/cadastro" element={<SingUp />} />
                <Route path="/habitos" element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}