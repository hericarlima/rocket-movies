import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi';
import { Container, Content, Profile } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';
import { Scroll } from '../../components/Scroll';

export function MoviePreview() {
    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover a nota?");

        if(confirm) {
            await api.delete(`/notes/${params.id}`);
            navigate(-1);
        }
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }

        fetchNote();
    }, []);

    return(
        <Container>
            <Header />

            {
                data &&
                <Scroll>
                <Content>   
                        <ButtonText 
                            icon={FiArrowLeft} 
                            title="Voltar" 
                            onClick={handleBack} 
                        />
                     
                        <div className="stars">
                            <h1>{data.title}</h1>
                            <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
                        </div>

                        <Profile>
                            <div className="user">
                                <img src={avatarUrl} alt={user.name} />
                                Por <span>{user.name}</span>
                            </div>
                            <div className="update">
                                <FiClock />
                                <span>{data.created_at}</span>
                            </div>
                        </Profile>

                        {
                            data.tags &&
                            <div className="tags">
                                {
                                    data.tags.map( tag => (
                                        <Tag 
                                            key={String(tag.id)}
                                            title={tag.name} 
                                        />
                                    ))
                                }          
                            </div>
                        }

                        <p>{data.description}</p>
                        
                    <Button 
                        title="Excluir filme" 
                        onClick={handleRemove}    
                    /> 
                </Content>
                </Scroll>
            }   
        </Container>
    );
}