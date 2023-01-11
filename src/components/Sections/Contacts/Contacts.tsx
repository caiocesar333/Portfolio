import React from 'react';
import { ContactForm } from '../../ContactForm/ContactForm';
import { LargeText } from '../../TextComponents/LargeText';
import { SmallText } from '../../TextComponents/SmallText';

import { Container, Line, Tab, TextWrapper, Wrapper } from './style';

export function Contacts() {
    return (
        <Container>
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
            </Tab>
            <ContactForm />
        </Container>
    )
}