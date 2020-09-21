import styled, { keyframes } from 'styled-components';
import signUpBackgroundImg from '../../assets/sign-up-background.png';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;
`;

const appearFromRight = keyframes`
from {
        opacity:0;
        transform: tanslateX(50px);
}
to {

    opacity:1;
        transform: tanslateX(0);
}
}

`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRight} 1s;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }

        svg {
            margin-left: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackgroundImg}) no-repeat center;
    background-size: cover;
`;
