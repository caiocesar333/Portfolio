import React from 'react';
import { Small } from './style';

interface SmallTextProps{
    color?:string | undefined,
    text:string,
}

export function SmallText({color,text}:SmallTextProps) {
    return (
        <Small color={color}>{text}</Small>
    )
}