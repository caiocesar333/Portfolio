import React from 'react';
import logo from "../../assets/logo/logo.svg"
import { SmallText } from '../TextComponents/SmallText';
import { Container, Logo, TabsWrapper, TextWrapper } from './style';
import { HashLink as Link } from 'react-router-hash-link';

export function Navbar() {
    return (
        <Container>
            <Logo src={logo} alt={"Caio Logo"}></Logo>
            <TabsWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true' about="No hover" />
                    <SmallText text='Home' color='false' about="hover" />
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true' about="No hover" />
                    <Link to='#projects' smooth={true} style={{ textDecoration: "none" }} >
                        <SmallText text='Works' color='false' about="hover" />
                    </Link>
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true' about="No hover" />
                    <Link to={"#aboutMe"} smooth={true} style={{textDecoration:"none"}}>
                        <SmallText text='About Me' color='false' about="hover" />
                    </Link>
                </TextWrapper>
                <TextWrapper>
                    <SmallText text='#' color='true' about="No hover" />
                    <Link to={"#contacts"} smooth={true} style={{textDecoration:"none"}}>
                        <SmallText text='Contact' color='false' about="hover" />
                    </Link>
                </TextWrapper>
            </TabsWrapper>
        </Container>
    )
}