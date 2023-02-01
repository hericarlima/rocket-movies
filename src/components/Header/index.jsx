import { useAuth } from '../../hooks/auth'
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Brand, Search, Profile } from './styles';
import { ButtonText } from '../ButtonText';

export function Header({children}) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                {children}
            </Search>

            <Profile>
                <div>
                    <Link to="/profile"><span>{user.name}</span></Link>
                    <ButtonText title="sair" onClick={handleSignOut} /> 
                </div>
                <img src={avatarUrl} alt={user.name}/>
            </Profile>
        </Container>
    );
}
