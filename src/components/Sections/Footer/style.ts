import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ABB2BF;
    margin-top: 100px;
    margin-bottom: 100px;
    `;
export const LogoWrapper = styled.div`
        display: flex;
        flex-direction: column;
        padding-top: 50px;
    `;

export const MediaWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

export const Wrapper = styled.div`
        display: flex;
        gap: 5px;
    `;

export const LogoXL = styled.img`
    width: 91px;
    height: 62px;
`
export const MediaImage = styled.img`
    &:hover{
    cursor: pointer;
}
`


