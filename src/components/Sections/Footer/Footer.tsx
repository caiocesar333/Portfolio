import React from 'react';

import { Container, LogoWrapper, LogoXL, MediaImage, MediaWrapper, Wrapper } from './style';
import logoXL from "../../../assets/logo/logoXL.svg"
import { SmallText } from '../../TextComponents/SmallText';
import { MediumText } from '../../TextComponents/MediumText';
import github from "../../../assets/media/Github.svg"
import figma from "../../../assets/media/Figma.svg"
import linkedin from "../../../assets/media/Linkedin.svg"

export function Footer() {

    return (
        <Container>
            <LogoWrapper>
                <LogoXL src={logoXL} />
                <SmallText about='false' text='Brazilian Web designer and front-end developer' />
                <SmallText about='false' text='© Copyright 2022. Made by Caio' />
            </LogoWrapper>
            <MediaWrapper>
                <MediumText text='Media' />
                <Wrapper>
                    <MediaImage src={github}/>
                    <MediaImage src={figma}/>
                    <MediaImage src={linkedin}/>
                </Wrapper>
            </MediaWrapper>
        </Container>
    )
}
