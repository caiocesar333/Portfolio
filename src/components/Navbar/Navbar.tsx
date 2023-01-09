import React from 'react';
import logo from "../../assets/logo/logo.svg"
import { SmallText } from '../TextComponents/SmallText';
import { Container, Logo, TabsWrapper, TextWrapper } from './style';

export function Navbar() {
    return (
        <Container>
            <Logo src={logo} alt={"Caio Logo"}></Logo>
            <TabsWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true'/>
                    <SmallText text='Home' color='false'/>
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true'/>
                    <SmallText text='Works' color='false'/>
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true'/>
                    <SmallText text='About Me' color='false'/>
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true'/>
                    <SmallText text='Contact' color='false'/>
                </TextWrapper>
            </TabsWrapper>
        </Container>
    )
}