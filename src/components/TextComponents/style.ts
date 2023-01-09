import styled from 'styled-components';

export const Small = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${props=>props.color === "true" ? "#C778DD" : "#ABB2BF"};
    &:hover{
        color: white;
        cursor: pointer;
    }

`;

export const Medium = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: ${props=>props.color ? "#C778DD" : "white"};
`;

export const Large = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: ${props=>props.color ? "#C778DD" : "white"};
`;
