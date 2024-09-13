import React, { useContext, useEffect } from "react";
import { HeaderConteinerStyled, ImageUserStyled } from "./HeaderStyled";
import UserContext from "../../contexts/UserContext";

import trackIt from '../../assets/trackIt.svg';

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
                <img src={trackIt} alt="TrackIt" />
                <ImageUserStyled src={user.image} />
            </HeaderConteinerStyled>
        </>
    );
}