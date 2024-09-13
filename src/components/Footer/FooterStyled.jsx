import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const FooterButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    font-size: 17.98px;
    line-height: 22.47px;
    text-decoration: none;
    color: ${({ activeFuncti }) => (activeFuncti ? "#ffffff" : "#d4d4d4")}; /* Ajuste na lógica */
    background-color: ${({ activeFuncti }) => (activeFuncti ? "#52b6ff" : "#ffffff")}; /* Ajuste na lógica */

    img {
        width: 18px;
        margin-right: 8px;
    }
`;
