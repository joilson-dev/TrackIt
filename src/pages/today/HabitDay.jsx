import { DivLeft, DivRight, HabitDayConteinerStyled } from "./TodayStyled";
import { okImg } from '/src/assets/ok.png';

export default function HabitDay({ id, name, done, currentSequence, highestSequence, onClickDone }) {
    return (
        <HabitDayConteinerStyled>
            <DivLeft>
                <h2>{name}</h2>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </DivLeft>
            <DivRight onClick={() => onClickDone(id, done)} $done={done}>
                <img src={okImg} />
            </DivRight>
        </HabitDayConteinerStyled>
    );
}
