import React from 'react';

import { Container, Input, LargeFormCamp, MediumFormCamp, SmallFormCamp, Wrapper } from './style';

export function ContactForm() {
    return (
        <Container>
            <Wrapper>
                <SmallFormCamp>
                    <Input placeholder='Name'/>
                </SmallFormCamp>
                <SmallFormCamp>
                    <Input placeholder='Email'/>
                </SmallFormCamp>
            </Wrapper>
            <MediumFormCamp>
                <Input placeholder='Title'/>
            </MediumFormCamp>
            <LargeFormCamp>
                <Input placeholder='Message'/>
            </LargeFormCamp>
        </Container>
    )
}