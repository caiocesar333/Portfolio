import React from 'react';
import { SmallText } from '../TextComponents/SmallText';

import { Container, NameWrapper, SkillsWrapper } from './style';

interface SkillBoxProps {
    boxName: string,
    skills: string
}

export function SkillBox({ boxName, skills }: SkillBoxProps) {
    return (
        <Container>
            <NameWrapper>
                <SmallText text={boxName} about="false" />
            </NameWrapper>
            <SkillsWrapper>
                <SmallText text={skills} about="false" />
            </SkillsWrapper>
        </Container>
    )
}