import React from 'react';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { LargeText } from '../TextComponents/LargeText';
import { SmallText } from '../TextComponents/SmallText';

import { Container, ProjectImage, Wrapper } from './style';

interface ProjectCardProps {
    img: string
    techs: string,
    name: string,
    desc: string,
}

export function ProjectCard({ img, techs, name, desc }: ProjectCardProps) {

    return (
        <Container>
            <ProjectImage src={img} />
            <Wrapper>
                <SmallText about='false' text={techs} />
            </Wrapper>
            <Wrapper>
                <LargeText text={name} />
                <SmallText text={desc} about="false" />
                <PrimaryButton nameToLink={name} text='Github <~>' />
            </Wrapper>
        </Container>
    )
}