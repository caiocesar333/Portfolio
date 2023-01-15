import React from 'react';
import { ProjectCard } from '../../ProjectCard/ProjectCard';
import { LargeText } from '../../TextComponents/LargeText';
import { ViewAll } from '../../TextComponents/ViewAll';
import coral from "../../../assets/projects/coral.png"
import folio from "../../../assets/projects/folio.png"
import keepalive from "../../../assets/projects/keepalive.png"
import planner from "../../../assets/projects/planner.png"
import twitter from "../../../assets/projects/twitter.png"
import api from "../../../assets/projects/api.png"
import MediaQuery from 'react-responsive'


import { Container, LargeProjectWrapper, Line, ProjectWrapper, Tab, Wrapper } from './style';

export function Projects() {
    return (
        <Container id='projects'>
            <Tab>
                <Wrapper>
                    <LargeText color='true' text='#' />
                    <LargeText color='false' text='projects' />
                    <Line />
                </Wrapper>
                <MediaQuery minWidth={1600} maxWidth={1919}>
                <ProjectWrapper>
                        <ProjectCard name='Coral' techs='TypeScript JavaScript ReactJs Storybook '
                            img={coral} desc='E-commerce website designed for Compass.Uol internship' />
                        <ProjectCard name='CoralApi' techs='JavaScript NodeJs (Express) Mongo Stripe Crypto-js'
                            img={api} desc='BackEnd API designed for Coral E-commerce ' />
                        <ProjectCard name='KeepAlive' techs='JavaScript CSS SCSS HTML'
                            img={keepalive} desc='Digital Login System for Compass.Uol internship' />
                        <ProjectCard name='Planner' techs='JavaScript CSS HTML'
                            img={planner} desc='Weekly Planner ' />
                        <ProjectCard name='TwitterClone' techs='TypeScript JavaScript ReactJs Storybook'
                            img={twitter} desc='Twitter Clone to test my react skills ' />
                        <ProjectCard name='FolioAgency' techs='HTML CSS SCSS'
                            img={folio} desc='Cloning Folio Agency using html and css ' />
                    </ProjectWrapper>
                </MediaQuery>
                <MediaQuery minWidth={1920}>
                    <LargeProjectWrapper>
                        <ProjectCard name='Coral' techs='TypeScript JavaScript ReactJs Storybook '
                            img={coral} desc='E-commerce website designed for Compass.Uol internship' />
                        <ProjectCard name='CoralApi' techs='JavaScript NodeJs (Express) Mongo Stripe Crypto-js'
                            img={api} desc='BackEnd API designed for Coral E-commerce ' />
                        <ProjectCard name='KeepAlive' techs='JavaScript CSS SCSS HTML'
                            img={keepalive} desc='Digital Login System for Compass.Uol internship' />
                        <ProjectCard name='Planner' techs='JavaScript CSS HTML'
                            img={planner} desc='Weekly Planner ' />
                        <ProjectCard name='TwitterClone' techs='TypeScript JavaScript ReactJs Storybook'
                            img={twitter} desc='Twitter Clone to test my react skills ' />
                        <ProjectCard name='FolioAgency' techs='HTML CSS SCSS'
                            img={folio} desc='Cloning Folio Agency using html and css ' />
                    </LargeProjectWrapper>
                </MediaQuery>
                <ViewAll />
            </Tab>
        </Container>
    )
}