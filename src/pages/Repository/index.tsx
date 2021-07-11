import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import {Header, RepositoryInfo, Issues} from './styles';
interface RepositoryParams{
    repository: string;
}

const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to="/">
                    <FiChevronLeft size={16}/>
                        Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                   <img src="https://avatars.githubusercontent.com/u/71500239?v=4" alt="Ronan MIchel"/>
                   <div>
                       <strong>RonanMichel96/primeiro-projeto-react</strong>
                       <p>Descrição do Repositório</p>
                   </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>64</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to={'teste'}>
                    <div>
                        <strong>teste</strong>
                        <p>teste</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
    
};

export default Repository;