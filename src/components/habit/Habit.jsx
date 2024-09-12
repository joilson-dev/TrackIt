import { DayButton, DaysContainer, HabitConteinerStyled } from "./HabitStyled";


export default function Habit({ id, name, days }) {
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
        <>
            <HabitConteinerStyled>
                <h4>{name}</h4>
                <DaysContainer>
                    {weekDays.map((day, index) => (
                        <DayButton
                            key={index}
                            selected={days.includes(index)}>
                            {day}
                        </DayButton>
                    ))}
                </DaysContainer>
            </HabitConteinerStyled>
        </>
    );
}
