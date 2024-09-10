import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    max-width: 600px;
    height: 65px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
`;

export const FooterButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #52B6FF;
    font-size: 17.98px;
    line-height: 22.47px;


    &.blue {
        background-color: #52B6FF;
    }

    &.white {
        background-color: #FFFFFF;
        color: #D4D4D4;
    }

    img{
        width: 18px;
    }
`;