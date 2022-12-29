import { Container, Profile } from './styles';

import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título" type="text"/>

            <Profile>
                <div>
                    <span>Hérica Lima</span>
                    <a href="#">
                        sair
                    </a>
                </div>
                <img src="https://github.com/hericarlima.png" alt="Foto de usuário." />
            </Profile>
        </Container>
    );
}