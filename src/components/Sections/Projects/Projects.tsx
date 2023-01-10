import React from 'react';
import { ProjectCard } from '../../ProjectCard/ProjectCard';
import { LargeText } from '../../TextComponents/LargeText';
import { ViewAll } from '../../TextComponents/ViewAll';
import chert from "../../../assets/projects/chert.png"

import { Container, Line, ProjectWrapper, Tab, Wrapper } from './style';

export function Projects() {
    return (
        <Container>
            <Tab>
                <Wrapper>
                    <LargeText color='true' text='#' />
                    <LargeText color='false' text='projects' />
                    <Line />
                </Wrapper>
                <ProjectWrapper>
                    <ProjectCard name='ChertNodes' techs='HTML SCSS Python Flask'
                        img={chert} desc='Minecraft servers hosting' />
                    <ProjectCard name='ChertNodes' techs='HTML SCSS Python Flask'
                        img={chert} desc='Minecraft servers hosting' />
                    <ProjectCard name='ChertNodes' techs='HTML SCSS Python Flask'
                        img={chert} desc='Minecraft servers hosting' />
                    <ProjectCard name='ChertNodes' techs='HTML SCSS Python Flask'
                        img={chert} desc='Minecraft servers hosting' />
                </ProjectWrapper>
                <ViewAll />
            </Tab>
        </Container>
    )
}