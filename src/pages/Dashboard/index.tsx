import React, { useState } from 'react';
import {
    Container,
    Header,
    HeaderContent,
    Profile,
    Content,
    Schedule,
    Calendar,
    NextAppointment,
    Section,
    Appointment,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth();
    const [selectedDate, setSelectedDate] = useState(new Date())
    console.log(user);
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="GoBarber" />
                    <Profile>
                        <img src={user.avatar_url} alt={user.name} />
                        <div>
                            <span>Bem-vindo,</span>
                            <strong>{user.name}</strong>
                        </div>
                    </Profile>
                    <button type="button" onClick={signOut}>
                        <FiPower />
                    </button>
                </HeaderContent>
            </Header>
            <Content>
                <Schedule>
                    <h1>Horários agendados</h1>
                    <p>
                        <span>Hoje</span>
                        <span>Hoje</span>
                        <span>Hoje</span>
                    </p>
                    <NextAppointment>
                        <strong>Atendimento a seguir</strong>
                        <div>
                            <img src="https://avatars3.githubusercontent.com/u/11083288?s=460&u=06cb1598cc0323d116f30792141f147c8bd3ed28&v=4://github.com/account" />
                            <strong>Diego Fernandes</strong>
                            <span>
                                <FiClock />
                                08:00
                            </span>
                        </div>
                    </NextAppointment>
                    <Section>
                        <strong>Manhã</strong>
                        <Appointment>
                            <span>
                                <FiClock />
                                08:00
                            </span>
                            <div>
                                <img src="https://avatars3.githubusercontent.com/u/11083288?s=460&u=06cb1598cc0323d116f30792141f147c8bd3ed28&v=4://github.com/account" />
                                <strong>Diego Fernandes</strong>
                            </div>
                        </Appointment>
                        <Appointment>
                            <span>
                                <FiClock />
                                08:00
                            </span>
                            <div>
                                <img src="https://avatars3.githubusercontent.com/u/11083288?s=460&u=06cb1598cc0323d116f30792141f147c8bd3ed28&v=4://github.com/account" />
                                <strong>Diego Fernandes</strong>
                            </div>
                        </Appointment>
                    </Section>
                    <Section>
                        <strong>Tarde</strong>
                        <Appointment>
                            <span>
                                <FiClock />
                                08:00
                            </span>
                            <div>
                                <img src="https://avatars3.githubusercontent.com/u/11083288?s=460&u=06cb1598cc0323d116f30792141f147c8bd3ed28&v=4://github.com/account" />
                                <strong>Diego Fernandes</strong>
                            </div>
                        </Appointment>
                    </Section>
                </Schedule>
                <Calendar />
            </Content>
        </Container>
    );
};

export default Dashboard;
