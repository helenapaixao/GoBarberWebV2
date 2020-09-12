import React, { useRef, useCallback,useState } from 'react';
import { Container, Content, Background, AnimationContainer } from './styles';
import logo from '../../assets/logo.svg';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface ForgotPasswordFormData {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const [loading,setLoading] = useState(false);
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();


    const handleSubmit = useCallback(
        async (data: ForgotPasswordFormData) => {
            try {
                setLoading(true);
                formRef.current?.setErrors({});

                const shema = Yup.object().shape({
                    email: Yup.string().required('Email obrigatório').email(),
         
                });

                await shema.validate(data, {
                    abortEarly: false,
                });

              await  api.post('/password/forgot', {
                    email:data.email,
                });

                addToast({
                    type:'sucess',
                    title:'E-mail de recuperação enviado',
                    description:'Enviamos um e-mail para recuperação de senha,cheque sua caixa de entrada'
                })
            /* 
                history.push('/dashboard'); */

                api.post('/password/forgot', {
                    email:data.email
                });

                addToast({
                    type:'sucess',
                    title:'E-mail de recuperação enviado',
                    description:'Enviamos um e-mail para confirmar a recuperação de senha'
                })
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                    return;
                }

                addToast({
                    type: 'error',
                    title: 'Erro na recuperação de senha',
                    description:
                        'Ocorreu um erro ao tentar realizar a recuperação de senha  ',
                });
            } finally {
                setLoading(false);
            }
        },
        [ addToast],
    );

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logo} alt="GoBarber" />
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Recuperação de senha</h1>
                        <Input
                            name="email"
                            icon={FiMail}
                            placeholder="E-mail"
                        />

                        <Button loading={loading} type="submit">Recuperar</Button>
                    </Form>
                    <Link to="/">
                        <FiLogIn />
                        Voltar ao login
                    </Link>
                </AnimationContainer>
            </Content>
            <Background/>
        </Container>
    );
};

export default ForgotPassword;
