import React, { useRef, useCallback, useContext } from 'react';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { AuthContext } from '../../context/AuthContext';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData{
    email: string,
    password: string,
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { user, signIn } = useContext(AuthContext);

    console.log(user);

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});

                const shema = Yup.object().shape({
                    name: Yup.string().required('Nome obrigatório'),
                    email: Yup.string().required('Email obrigatório').email(),
                    password: Yup.string().required('Senha obrigatória'),
                });

                await shema.validate(data, {
                    abortEarly: false,
                });

                signIn({
                    email: data.email,
                    password: data.password,
                });
            } catch (err) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
            }
        },
        [signIn],
    );

    return (
        <Container>
            <Content>
                <img src={logo} alt="GoBarver" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Entrar</Button>
                    <a href="forgot"> Esqueci minha senha</a>
                </Form>
                <a href="forgot">
                    <FiLogIn />
                    Criar Conta
                </a>
            </Content>
            <Background></Background>
        </Container>
    );
};

export default SignIn;
