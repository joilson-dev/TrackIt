import { AddHabitConteinerStyled } from "./AddHabitStyled";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

export default function AddHabit({ onAddHabitClick }) {
    const location = useLocation();

    const today = dayjs().format('dddd, DD/MM');

    return (
        <>
            <AddHabitConteinerStyled>
                {location.pathname === '/hoje' ? (
                    <h2>{today}</h2>
                ) : (<>
                    <h2>Meus hábitos</h2>
                    <button onClick={onAddHabitClick}>+</button>
                </>
                )}

            </AddHabitConteinerStyled>
        </>
    );
}
