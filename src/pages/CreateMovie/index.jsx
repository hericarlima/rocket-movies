import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function CreateMovie() {
    return (
        <Container>
            <Header />

            <Content>
                <ButtonText icon={FiArrowLeft} title="Voltar" />
                
                <h1>Novo filme</h1>

                <div className="col-3">
                    <Input type="text" placeholder="Título"/>
                    <Input type="number" placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <Input type="textarea" placeholder="Observações" />

                


            </Content>
        </Container>
    );
}