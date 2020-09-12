import React from 'react';
import { Container, Header, HeaderContent, Profile } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
    const {signOut} = useAuth();
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="GoBarber" />
                    <Profile>
                        <img
                            src="https://avatars3.githubusercontent.com/u/11083288?s=460&u=06cb1598cc0323d116f30792141f147c8bd3ed28&v=4"
                            alt="Avatar"
                        />
                        <div>
                            <span>Bem-vindo,</span>
                            <strong>Helena Paixão</strong>
                        </div>
                    </Profile>
                    <button type="button" onClick={signOut}>
                        <FiPower />
                    </button>
                </HeaderContent>
            </Header>
        </Container>
    );
};

export default Dashboard;
