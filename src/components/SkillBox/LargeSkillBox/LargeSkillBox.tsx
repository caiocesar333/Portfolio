import React from 'react';
import { SmallText } from '../../TextComponents/SmallText';

import { Container, NameWrapper, SkillsWrapper } from './style';

interface LargeSkillBoxProps {
    boxName: string,
    skills: string
}

export function LargeSkillBox({ boxName, skills }: LargeSkillBoxProps) {
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