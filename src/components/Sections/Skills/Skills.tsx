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
                    <SkillBox boxName='Languages' skills='TypeScript Lua Python JavaScript' />
                </SkillsBoxWrapper>
                <SkillsBoxWrapper>
                    <SkillBox boxName='Databases' skills='SQLite PostgreSQL Mongo' />
                    <SkillBox boxName='Other' skills='HTML CSS EJS SCSS REST Jinja' />
                </SkillsBoxWrapper>
                <SkillsBoxWrapper>
                    <LargeSkillBox boxName='Tools' skills='VSCode Neovim Linux Figma XFCE Arch Git FontAwesome' />
                    <LargeSkillBox boxName='React' skills='Vue Disnake Discord.js Flask Espress.js' />
                </SkillsBoxWrapper>
            </Wrapper>
        </Container>
    )
}