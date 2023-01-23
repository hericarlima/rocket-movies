import { useAuth } from '../../hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile } from './styles';


export function Header({ ...rest }) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container {...rest}>
            <h1>RocketMovies</h1>

            <Profile>
                <div>
                    <Link to="/profile"><span>{user.name}</span></Link>
                    <a href="#" onClick={handleSignOut}> 
                        sair
                    </a>
                </div>
                <img src={avatarUrl} alt={user.name}/>
            </Profile>
        </Container>
    );
}
