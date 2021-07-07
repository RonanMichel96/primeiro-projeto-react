import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite aqui o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="">
                    <img 
                    src="https://avatars.githubusercontent.com/u/71500239?v=4"
                    alt="Ronan Michel"
                    />
                    <div>
                        <strong>RonanMichel96/primeiro-projeto-react</strong>
                        <p>Uma página símples em React para pesquisar repositórios no Github</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="">
                    <img 
                    src="https://avatars.githubusercontent.com/u/71500239?v=4"
                    alt="Ronan Michel"
                    />
                    <div>
                        <strong>RonanMichel96/primeiro-projeto-react</strong>
                        <p>Uma página símples em React para pesquisar repositórios no Github</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="">
                    <img 
                    src="https://avatars.githubusercontent.com/u/71500239?v=4"
                    alt="Ronan Michel"
                    />
                    <div>
                        <strong>RonanMichel96/primeiro-projeto-react</strong>
                        <p>Uma página símples em React para pesquisar repositórios no Github</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;