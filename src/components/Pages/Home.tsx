import React from 'react';
import { Banner } from '../Banner/Banner';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { LargeText } from '../TextComponents/LargeText';
import { SmallText } from '../TextComponents/SmallText';
import { Container, ImageWrapper, TextWrapper } from './style';

export function Home() {
    return (
        <Container>
            <TextWrapper>
                <div style={{ "display": "flex", "flexDirection": "row", "gap": "10px" }}>
                    <LargeText text='Caio is a ' />
                    <LargeText text='web designer' color='true' />
                    <LargeText text='and ' />
                </div>
                <div style={{ "display": "flex", "flexDirection": "row", "gap": "10px" }}>
                    <LargeText text='front-end developer ' color='true' />
                </div>
                <SmallText text='He crafts responsive websites where technologies meet creativity' color='false' about='true' />
                <PrimaryButton text='Contact me !!' />
            </TextWrapper>
            <ImageWrapper>
                <Banner />
            </ImageWrapper>
        </Container>
    )
}