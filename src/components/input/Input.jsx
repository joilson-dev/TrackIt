import { InputStyled } from "./InputStyles";

export default function Input({ type, placeholder, autoComplete, value, onChange, required, disabled }) {
    return (
        <>
            <InputStyled
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
            />
        </>
    )
}