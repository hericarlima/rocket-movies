import { Container, Content } from './styles';

import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Movie } from '../../components/Movie';

export function Home() {
    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <div>
                        <h1>Meus filmes</h1>

                        <Link to="/create">
                            <Button icon={FiPlus} title="Adicionar filme" />
                        </Link>
                    </div>

                    <Link to="/preview">
                        <Movie data={{
                        title: 'Interestellar',
                        tags: [{id: '1', name: 'Ficção Científica'}, {id: '2', name: 'Drama'}, {id: '3', name: 'Família'}],
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...'
                        }} />

                        <Movie data={{
                        title: 'Interestellar',
                        tags: [{id: '1', name: 'Ficção Científica'}, {id: '2', name: 'Drama'}, {id: '3', name: 'Família'}],
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...'
                        }} />

                        <Movie data={{
                            title: 'Interestellar',
                            tags: [{id: '1', name: 'Ficção Científica'}, {id: '2', name: 'Drama'}, {id: '3', name: 'Família'}],
                            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...'
                        }} /> 
                    </Link>
                </Content>
            </main>
        </Container>

    );
}