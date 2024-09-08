import { ButtonStyles } from "./ButtonStyles";

export default function Button({ children }) {
    return (
        <>
            <ButtonStyles type="button">{children}</ButtonStyles>
        </>
    )
}