import React from 'react';
import { LargeText } from '../../TextComponents/LargeText';
import squares from "../../../assets/skills/squares.png"

import { Container, Line, SkillsBoxWrapper, SquaresImage, Tab, Wrapper } from './style';
import { SkillBox } from '../../SkillBox/SkillBox';
import { LargeSkillBox } from '../../SkillBox/LargeSkillBox/LargeSkillBox';

export function Skills() {
    return (
        <Container>
            <Tab>
                <Wrapper>
                    <LargeText color='true' text='#' />
                    <LargeText color='false' text='skills' />
                    <Line />
                </Wrapper>
                <SquaresImage src={squares} alt={squares} />
            </Tab>
            <Wrapper>
                <SkillsBoxWrapper>
                    <SkillBox boxName='Main Languages' skills='TypeScript JavaScript NodeJs' />
                </SkillsBoxWrapper>
                <SkillsBoxWrapper>
                    <SkillBox boxName='Databases' skills='SQLite PostgreSQL Mongo Firebase' />
                    <SkillBox boxName='Other' skills='HTML CSS SCSS ApiREST DOM' />
                </SkillsBoxWrapper>
                <SkillsBoxWrapper>
                    <LargeSkillBox boxName='Tools' skills='VSCode Storybook Git Figma Tailwind Styled-Components ' />
                    <LargeSkillBox boxName="Frameworks and lib's" skills='ReactJs Espress.js Jquery SASS Bootstrap' />
                </SkillsBoxWrapper>
            </Wrapper>
        </Container>
    )
}