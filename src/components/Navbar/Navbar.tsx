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
                    <SmallText text='#' color='true' about="No hover"/>
                    <SmallText text='Home' color='false' about="hover"/>
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true'  about="No hover"/>
                    <SmallText text='Works' color='false' about="hover"/>
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true'  about="No hover"/>
                    <SmallText text='About Me' color='false' about="hover"/>
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true'  about="No hover"/>
                    <SmallText text='Contact' color='false' about="hover"/>
                </TextWrapper>
            </TabsWrapper>
        </Container>
    )
}