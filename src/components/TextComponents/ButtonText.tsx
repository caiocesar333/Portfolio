import React from 'react';
import { ButtonT } from './style';

interface ButtonTextProps{
    text:string,
}

export function ButtonText({text}:ButtonTextProps) {
    return (
        <ButtonT>{text}</ButtonT>
    )
}