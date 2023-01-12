import React from 'react';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { LargeText } from '../../TextComponents/LargeText';
import { SmallText } from '../../TextComponents/SmallText';
import { Container, Gif, Line, Tab, TextWrapper, Wrapper } from './style';
import gif from "../../../assets/gif/job.gif"

export function AboutMe() {

    return (
        <Container>
            <Tab>
                <Wrapper>
                    <LargeText color='true' text='#' />
                    <LargeText color='false' text='about-me' />
                    <Line />
                </Wrapper>
                <TextWrapper>
                    <SmallText about='false' text="Hello, i'm Caio César! " ></SmallText>
                    <SmallText about='false' text="I’m a self-taught front-end
                 developer based in Salvador, Bahia. I can develop responsive 
                 websites from scratch and raise them into modern 
                 user-friendly web experiences." ></SmallText>
                    <SmallText about='false' text="Transforming my creativity and 
                knowledge into websites has been my passion for over a year.
                 I have been helping various clients to establish their 
                 presence online. I always strive to learn about the newest 
                 technologies and frameworks." ></SmallText>
                </TextWrapper>
                <PrimaryButton text='Read More' />
            </Tab>
            <Gif src={gif} />
        </Container>
    )
}