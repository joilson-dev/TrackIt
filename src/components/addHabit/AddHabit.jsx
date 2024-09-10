import { AddHabitConteinerStyled } from "./AddHabitStyled";

export default function AddHabit({ onAddHabitClick }) {

    return (
        <>
            <AddHabitConteinerStyled>
                <h2>Meus hábitos</h2>
                <button onClick={onAddHabitClick}>+</button>
            </AddHabitConteinerStyled>
        </>
    );
}