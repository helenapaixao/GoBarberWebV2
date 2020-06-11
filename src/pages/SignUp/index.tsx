import React from 'react';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
    <Container>
            <Background/>
        <Content>
            <img src={logo} alt="GoBarver" />
            <form>
                <h1>Faça seu cadastro</h1>
                <Input  name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>
                <Button type="submit">Cadastrar</Button>
            </form>
            <a href="forgot">
                <FiArrowLeft />
                Voltar para Logon
            </a>
        </Content>
    
    </Container>
);

export default SignUp;
