import React from 'react';
import { ProjectCard } from '../../ProjectCard/ProjectCard';
import { LargeText } from '../../TextComponents/LargeText';
import { ViewAll } from '../../TextComponents/ViewAll';
import chert from "../../../assets/projects/chert.png"

import { Container, Line, Tab, Wrapper } from './style';

export function Projects() {
    return (
        <Container>
            <Tab>
                <Wrapper>
                    <LargeText color='true' text='#' />
                    <LargeText color='false' text='projects' />
                    <Line />
                    <ViewAll />
                </Wrapper>
                <ProjectCard name='ChertNodes' techs='HTML SCSS Python Flask' 
                img={chert} desc='Minecraft servers hosting' />
            </Tab>
        </Container>
    )
}