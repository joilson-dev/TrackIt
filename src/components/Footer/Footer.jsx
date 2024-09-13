import { useLocation } from "react-router-dom";
import { FooterButton, FooterContainer } from "./FooterStyled";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export default function Footer() {
    const location = useLocation();

    const isHabitosActive = location.pathname === '/habitos';
    const isHojeActive = location.pathname === '/hoje';

    return (
        <FooterContainer>
            <FooterButton
                to="/habitos"
                activeFuncti={isHabitosActive}
            >
                <CalendarMonthIcon />
                Hábitos
            </FooterButton>

            <FooterButton
                to="/hoje"
                activeFuncti={isHojeActive}
            >
                <EventAvailableIcon />
                Hoje
            </FooterButton>
        </FooterContainer>
    );
}
