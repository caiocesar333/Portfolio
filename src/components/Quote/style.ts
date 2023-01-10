import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px ;
    margin-bottom: 100px;
    align-items: flex-end;
`;

export const Phrase = styled.div`
    padding: 32px;
    width: 712px;
    height: 95px;
    border: 1px solid #ABB2BF;
`;

export const Author = styled.div`
    width: 162px;
    height: 40px;
    padding: 16px;
    gap: 10px;
    border: 1px solid #ABB2BF;
    display: flex;
    align-items: center;
`;

export const QuotationTop = styled.img`
    position: relative;
    top: 15px;
    right: 700px;
`   
export const QuotatioBottom = styled.img`
    position: relative;
    top: -90px;
    right: 15px;
`   