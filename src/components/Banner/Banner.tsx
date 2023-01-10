import React from 'react';
import { BannerImg, Container, CurrentlyWorkingDiv, PinkSquare, Text } from './style';
import banner from "../../assets/banners/photo.png"

export function Banner() {
    return (
        <Container>
            <BannerImg alt='Profile pic' src={banner} />
            <CurrentlyWorkingDiv>
                <PinkSquare/>
                <Text>Currently working on Portfolio</Text>
            </CurrentlyWorkingDiv>
        </Container>
    )
}