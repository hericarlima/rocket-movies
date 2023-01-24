import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { TagItem } from '../../components/TagItem';
import { Button } from '../../components/Button';
import { Scroll } from '../../components/Scroll';

export function CreateMovie() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie() {
        if(!title) {
            return alert("Digite o nome do filme!")
        }

        if(!rating) {
            return alert("Dê uma nota para o filme!")
        }

        if(newTag) {
            return alert("Você esqueceu de adicionar a tag! Clique em adicionar ou deixe o campo vazio.")
        }

        await api.post("/notes", {
            title,
            rating,
            description,
            tags
        });

        alert("Filme criado com sucesso!")
        navigate(-1);
    }

    return (
        <Container>
            <Header />

            <Scroll>
                <Content>
                    
                    <ButtonText 
                        icon={FiArrowLeft} 
                        title="Voltar" 
                        onClick={handleBack}    
                    />

                    <h1>Novo filme</h1>

                    <div className="col-2">
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}    
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}    
                        />
                    </div>

                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}     
                    />

                    <h2>Marcadores</h2>

                    <div className="tags">
                        { 
                            tags.map((tag, index) => (
                                <TagItem 
                                    key={String(index)}
                                    value={tag} 
                                    onClick={() => {handleRemoveTag(tag)}}
                                />
                            ))
                        }
                        
                        <TagItem 
                            isNew 
                            placeholder="Nova tag" 
                            onChange={e => setNewTag(e.target.value)} 
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>

                    <Button title="Salvar alterações" onClick={handleNewMovie} />
                               
                </Content>
            </Scroll>
        </Container>
    );
}