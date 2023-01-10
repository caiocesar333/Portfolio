import React from 'react';
import { Large } from './style';

interface LargeTextProps{
    color?:string | undefined,
    text:string,
}

export function LargeText({color,text}:LargeTextProps) {
    return (
        <Large color={color}>{text}</Large>
    )
}