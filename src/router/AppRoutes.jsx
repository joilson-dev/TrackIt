import { Route, Routes, useLocation } from "react-router-dom"
import SingUp from "../pages/singUp/SingUp"
import SingIn from "../pages/singIn/SingIn"
import Habits from "../pages/habits/Habits"
import GlobalStyle from '../assets/global-styles.jsx'

import { AppConteinerStyled } from "../AppStyled.jsx"

export default function AppRouter() {
    const location = useLocation();


    const getBackgroundColor = () => {
        if (location.pathname === '/habitos') {
            return '#F2F2F2';
        }
        return '#FFFFFF';
    };

    return (
        <>
            <GlobalStyle $bgColor={getBackgroundColor()} />
            <AppConteinerStyled $bgColor={getBackgroundColor()}>
                <Routes>
                    <Route path="/" element={<SingIn />} />
                    <Route path="/cadastro" element={<SingUp />} />
                    <Route path="/habitos" element={<Habits />} />
                </Routes>
            </AppConteinerStyled>
        </>

    )
}