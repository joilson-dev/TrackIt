import React, { useContext, useEffect } from "react";
import { HeaderConteinerStyled, ImageUserStyled } from "./HeaderStyled";
import UserContext from "../../contexts/UserContext";

export default function Header() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <>
            <HeaderConteinerStyled>
                <img src="/src/assets/trackIt.svg" alt="TrackIt" />
                <ImageUserStyled src={user.image} />
            </HeaderConteinerStyled>
        </>
    );
}