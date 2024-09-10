import { FooterButton, FooterContainer } from "./FooterStyled";

export default function Footer() {

    return (
        <>
            <FooterContainer>
                <FooterButton
                    className="blue">
                    <img src="src\assets\celendarioDia.png" />
                    Hábitos
                </FooterButton>

                <FooterButton
                    className="white">
                    <img src="src\assets\calendarioOk.png" />
                    Hoje
                </FooterButton>

            </FooterContainer>
        </>
    );
}