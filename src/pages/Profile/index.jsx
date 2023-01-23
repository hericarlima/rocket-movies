import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null); //novo arquivo

    function handleBack() {
        navigate(-1);
    }
    
    async function handleUpdate() {
        const updated = {
            name,
            email,
            password,
            new_password: passwordNew
        }

        const userUpdated = Object.assign(user, updated); //sobrescreve o novo sobre antigo

        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <ButtonText 
                    icon={FiArrowLeft} 
                    title={'Voltar'} 
                    onClick={handleBack}    
                />
            </header>

            <Form>
                <Avatar>
                    <img 
                        src={avatar} 
                        alt="Foto de usuário." />
                    <label htmlFor="avatar">
                        <FiCamera />   
                        <input 
                            id="avatar" 
                            type="file"
                            onChange={handleChangeAvatar}    
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate} />                
            </Form>
            
        </Container>

    );
}