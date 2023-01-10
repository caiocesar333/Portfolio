import React from 'react';
import { Medium } from './style';

interface MediumTextProps{
    color?:string | undefined,
    text:string,
}

export function MediumText({color,text}:MediumTextProps) {
    return (
        <Medium color={color}>{text}</Medium>
    )
}