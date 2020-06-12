import React, { useCallback, useRef } from 'react';
import { Container, Content, AnimationContainer,Background } from './styles';
import { FormHandles } from '@unform/core';
import logo from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {Link} from 'react-router-dom'

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            const shema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email(),
                password: Yup.string().min(
                    6,
                    'No minimo senha com 6 caracteres',
                ),
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
            <Background />
            <Content>
            <AnimationContainer>
                <img src={logo} alt="GoBarber" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input 
                    name="name" 
                    icon={FiUser} 
                    type="text" 
                    placeholder="Nome" />
                    <Input
                        name="email"
                        icon={FiMail}
                        type="email"
                        placeholder="E-mail"
                    />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para Logon
                </Link>
                </AnimationContainer>
            </Content>
        </Container>
    );
};

export default SignUp;
