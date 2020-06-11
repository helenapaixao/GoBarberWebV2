import React, {useCallback} from 'react';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    const handleSubmit = useCallback(async  (data: object) => {
        try {
            const shema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Email obrigatório').email(),
                password: Yup.string()
                    .min(6, 'No minimo senha com 6 caracteres')
            });
            await shema.validate(data, {
                abortEarly: false
            });
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <Container>
            <Background />
            <Content>
                <img src={logo} alt="GoBarver" />
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome" />
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
                <a href="forgot">
                    <FiArrowLeft />
                    Voltar para Logon
                </a>
            </Content>
        </Container>
    );
};

export default SignUp;
