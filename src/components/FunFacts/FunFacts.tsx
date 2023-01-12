import React from 'react';
import { Facts } from '../Facts/Facts';
import { LargeText } from '../TextComponents/LargeText';

import { Container, FactsWrapper, Tab, Wrapper } from './style';


export function FunFacts() {
    return (
        <Container>
            <Tab>
                <Wrapper>
                    <LargeText color='true' text='#' />
                    <LargeText color='true' text='my-fun-facts' />
                </Wrapper>
                <FactsWrapper>
                    <Facts text='I love to play chess' />
                    <Facts text='I study two engineering degrees' />
                    <Facts text='I have 2 siblings' />
                    <Facts text='my favorite sports are basketball and football'/>
                    <Facts text='My favorite movie is Shutter Island' />
                    <Facts text='My hobbies are gaming and playing guitar' />
                    <Facts text="I've never traveled out of Brazil " />
                </FactsWrapper>
            </Tab>
        </Container>
    )
}