import React from 'react';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logo} alt="GoBarver" />
            <form>
                <h1>Faça seu logon</h1>
                <Input  name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>
                <a href="forgot"> Esqueci minha senha</a>
            </form>
            <a href="forgot">
                <FiLogIn />
                Criar Conta
            </a>
        </Content>
        <Background></Background>
    </Container>
);

export default SignIn;
