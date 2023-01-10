import styled from 'styled-components';

export const Container = styled.div`
    background: ${props=>props.theme || "white"};
    color: ${props=>props.color || "black"};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

export const Content = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
