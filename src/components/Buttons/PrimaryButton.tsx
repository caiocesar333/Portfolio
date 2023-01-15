
import React from 'react';
import { ButtonText } from '../TextComponents/ButtonText';

import { Container } from './style';

interface PrimaryButtonProps{
    text:string,
    img?:string,
    nameToLink?: string,
}

export function PrimaryButton({text,nameToLink}:PrimaryButtonProps) {

    const redirect = ()=>{
        window.location.href = `https://github.com/caiocesar333/${nameToLink}`
    }

    return(
        <Container onClick={redirect}>
            <ButtonText text={text} />
        </Container>
    )
}