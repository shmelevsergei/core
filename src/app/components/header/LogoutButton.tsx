'use client'
import React from 'react';
import {useRouter} from "next/navigation";

const LogoutButton = () => {
    const redirect = useRouter()

    const handleClick = () => {
        redirect.push('/')
    }
    return (
        <button onClick={handleClick}>
            Выйти
        </button>
    );
};

export default LogoutButton;