import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import SingUp from "../pages/singUp/SingUp"
import SingIn from "../pages/singIn/SingIn"
import Habits from "../pages/habits/Habits"
import GlobalStyle from '../assets/global-styles.jsx'

import { AppConteinerStyled } from "../AppStyled.jsx"
import Today from "../pages/today/Today.jsx"

export default function AppRouter() {
    const location = useLocation();


    const getBackgroundColor = () => {
        if (location.pathname === '/habitos' || location.pathname === '/hoje') {
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
                    <Route path="/hoje" element={<Today />} />
                </Routes>
            </AppConteinerStyled>
        </>

    )
}