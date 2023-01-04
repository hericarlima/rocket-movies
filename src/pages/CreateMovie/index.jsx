import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { TagItem } from '../../components/TagItem';
import { Button } from '../../components/Button';

export function CreateMovie() {
    return (
        <Container>
            <Header />

            <Content>
                
                    <ButtonText icon={FiArrowLeft} title="Voltar" />

                    <h1>Novo filme</h1>

                    <div className="col-2">
                        <Input type="text" placeholder="Título"/>
                        <Input type="number" placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <TextArea placeholder="Observações" />

                    <h2>Marcadores</h2>

                    <div className="tags">
                        <TagItem value="Ação" />
                        <TagItem isNew placeholder="Nova tag" />
                    </div>

                    <div className="buttons">
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>                    
            </Content>
        </Container>
    );
}