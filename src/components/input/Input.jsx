import { InputStyled } from "./InputStyles";

export default function Input({ type, placeholder, autoComplete }) {
    return (
        <>
            <InputStyled type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
        </>
    )
}