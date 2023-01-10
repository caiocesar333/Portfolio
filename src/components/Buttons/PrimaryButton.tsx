
import React from 'react';
import { ButtonText } from '../TextComponents/ButtonText';

import { Container } from './style';

interface PrimaryButtonProps{
    text:string,
    img?:string,
}

export function PrimaryButton({text}:PrimaryButtonProps) {
    return(
        <Container>
            <ButtonText text={text} />
        </Container>
    )
}