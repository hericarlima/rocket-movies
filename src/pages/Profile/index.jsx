import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Container, Form, Avatar } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
    return (
        <Container>
            <header>
                <ButtonText icon={FiArrowLeft} title={'Voltar'} />
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/hericarlima.png" alt="Foto de usuário." />
                    <label htmlFor="avatar">
                        <FiCamera />   
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />                
            </Form>
            
        </Container>

    );
}