import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`

export const BannerImg = styled.img`

`

export const PinkSquare = styled.div`
    width: 16px;
    height: 16px;
    background: #C778DD;

    border: 1px solid #C778DD;

`
export const CurrentlyWorkingDiv = styled.div`
    display: flex;
    width: 400px;
    height: 37px;
    border: 1px solid #ABB2BF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    color: #ABB2BF;
    &:last-word{
        color: white;
    }
`