import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    width: 150px;
    height: 40px;
    border: 1px solid #C778DD;
    &:hover{
        cursor: pointer;
       background: rgba(199, 120, 221, 0.2);
        transition: 200ms;
    }
`;
