import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Movie } from '../../components/Movie';
import { Scroll } from '../../components/Scroll';
import { Input } from '../../components/Input';

export function Home() {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleMoviePreview(id) {
        navigate(`/preview/${id}`);
    }

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data);
        }

        fetchNotes();
    }, [search]);
    
    return (
        <Container>
            <Header />
            
            <Scroll>
                <Content>
                    <Input
                        placeholder="Pesquisar pelo título"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <div>
                        <h1>Meus filmes</h1>

                        <Link to="/create">
                            <Button icon={FiPlus} title="Adicionar filme" />
                        </Link>
                    </div>
                    {
                        notes.map(note => (
                            <Movie 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleMoviePreview(note.id)}
                            />
                        ))
                    }
                </Content>
            </Scroll>
        </Container>

    );
}