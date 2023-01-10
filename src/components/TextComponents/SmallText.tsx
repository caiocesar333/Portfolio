import React from 'react';
import { Small } from './style';

interface SmallTextProps{
    color?:string | undefined,
    text:string,
    about: string,
}

export function SmallText({color,text,about}:SmallTextProps) {
    return (
        <Small color={color} about={about}>{text}</Small>
    )
}
