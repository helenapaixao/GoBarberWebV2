import React,{useRef, useCallback} from 'react';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import {FormHandles} from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';



import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
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
        } catch (err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <Container>
            <Content>
                <img src={logo} alt="GoBarver" />
                <Form ref={formRef} onSubmit={handleSubmit} >
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
