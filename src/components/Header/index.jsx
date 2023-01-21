import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile } from './styles';

import { Input } from '../Input';

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título" type="text"/>

            <Profile>
                <div>
                    <Link to="/profile"><span>{user.name}</span></Link>
                    <a href="#" onClick={signOut}>
                        sair
                    </a>
                </div>
                <img src={avatarUrl} alt={user.name}/>
            </Profile>
        </Container>
    );
}