import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${props=>props.theme || "white"};
    color: ${props=>props.color || "black"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

export const Content = styled.div`
    height: 100vh;
    width: 80vw;
`;
