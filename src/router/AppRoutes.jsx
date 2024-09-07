import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}