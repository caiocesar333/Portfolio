import React from 'react';
import { SmallText } from '../TextComponents/SmallText';
import { Container } from './style';

interface FactsProps{
    text:string,
}

export function Facts({text}:FactsProps) {
    return(
        <Container>
            <SmallText text={text} about="false"/>
        </Container>
    )
}