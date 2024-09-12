import styled from "styled-components";

export const FormContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 36px);
    border-radius: 5px;
    background-color: #ffffff;
    margin-left: 18px;
    margin-right: 18px;
    margin-top: 10PX;
    padding: 18px;
`;

export const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-size: 19.98px;
    line-height: 24.97px;
    color: #666666;
    padding-left:11px;
    margin-bottom: 8px;

    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    color: rgb(102, 102, 102);

    &::placeholder{
        color:#DBDBDB;
    }
`;

export const DaysContainer = styled.div`
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

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const CancelButton = styled.button`
    font-size: 15.98px;
    line-height: 19.97px;
    text-align: center;
    border: none;
    color: #52b6ff;
    padding: 10px 20px;
    background: none;
    `;

export const SaveButton = styled.button`
    font-size: 15.98px;
    line-height: 19.97px;
    text-align: center;
    background-color: #52b6ff;
    color: #ffffff;
    border-radius: 5px;
    padding: 10px 20px;
`;
