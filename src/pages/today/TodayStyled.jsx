import styled from "styled-components";

export const H3Styled = styled.h3`
`
export const HabitsConteiner = styled.div`
width: 100%;
`


export const HabitDayConteinerStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;

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
        color: #666666;

    }
    p{
      font-size: 12.98px;
      line-height: 16.22px;
    }

    &:last-child {
      position: relative;
      margin-bottom: 75px;
    }
`

export const DivLeft = styled.div`

`
export const DivRight = styled.div`
display: flex;
align-items: center;
justify-content: center;
content: "";
width: 69px;
height: 69px;
border-radius: 5px;
  background: ${(props) => (props.$done ? "#8FC549" : "#EBEBEB")};

img{
  width: 35.09px;
  height: 28px;

}
`