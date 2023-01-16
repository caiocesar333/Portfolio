import React from 'react';
// import { ContactForm } from '../../ContactForm/ContactForm';
import { LargeText } from '../../TextComponents/LargeText';
import { SmallText } from '../../TextComponents/SmallText';

import { Container, Line, Tab, TextWrapper, Wrapper } from './style';

export function Contacts() {
    return (
        <Container id='contacts'>
            <Tab>
                <Wrapper>
                    <LargeText color='true' text='#' />
                    <LargeText color='false' text='contacts' />
                    <Line />
                </Wrapper>
                <TextWrapper>
                    <SmallText about="false" text="I’m interested in job opportunities. However, 
                    if you have a freelance request, don’t hesitate to contact me"/>
                </TextWrapper>
            <TextWrapper>
                <SmallText text='Email: caiocesar333@outlook.com' color='true' about='false' />
                <SmallText text='Whatsapp: +55 (71)993707525' color='true' about='false' />
                <SmallText text='Linkedin: https://www.linkedin.com/in/caio-cesar-de-jesus-conceicao/' color='true' about='false' />
            </TextWrapper>
            </Tab>
            {/* <ContactForm /> NOT WORKING AT THE MOMENT */}
        </Container>
    )
}