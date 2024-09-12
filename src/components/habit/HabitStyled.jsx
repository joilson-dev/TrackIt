import styled from "styled-components";

export const HabitConteinerStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    width: calc(100% - 36px);
    height: 91px;
    margin-top: 10px;
    margin-left: 18px;
    margin-right: 18px;
    background: #FFFFFF;
    padding: 15px;

    h2{
        font-size: 19.98px;
        font-weight: 400;
        line-height: 24.97px;
        text-align: left;
        background: #666666;
    }

    &:last-child {
      position: relative;
      margin-bottom: 75px;
    }
`

export const DaysContainer = styled.div`
    padding-top: 8px;
    display: flex;
    justify-content: start;
    width: 100%;
    gap:4px;
    margin-bottom: 29px;
`;

export const DayButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    background-color: ${(props) => (props.selected ? "#D4D4D4" : "#FFFFFF")};
    color: ${(props) => (props.selected ? "#FFFFFF" : "#D4D4D4 ")};
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

`;


