import { DivLeft, DivRight, HabitDayConteinerStyled } from "./TodayStyled";

export default function HabitDay({ id, name, done, currentSequence, highestSequence, onClickDone }) {
    return (
        <HabitDayConteinerStyled>
            <DivLeft>
                <h2>{name}</h2>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </DivLeft>
            {console.log(id)}
            <DivRight onClick={() => onClickDone(id, done)} $done={done}>
                <img src="src\assets\ok.png" />
            </DivRight>
        </HabitDayConteinerStyled>
    );
}
