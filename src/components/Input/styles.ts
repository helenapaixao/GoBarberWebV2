import styled from 'styled-components';

export const Container = styled.div`
    background: #232129;
    color: #f4ede8;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    align-items:center;
    color: #666360;

    & + div {
            margin-top: 8px;
        }

    input {
        background: transparent;
        display:1;
        border:0;
        color: #f4ede8;


        &::placeholder {
            color: #666360;
        }

        
    }

    svg {
        margin-right: 16px;
    }
`;
