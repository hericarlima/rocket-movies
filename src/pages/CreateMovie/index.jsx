import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { TagItem } from '../../components/TagItem';
import { Button } from '../../components/Button';
import { Scroll } from '../../components/Scroll';

export function CreateMovie() {
    return (
        <Container>
            <Header />

            <Scroll>
                <Content>
                    <Link to="/">
                        <ButtonText icon={FiArrowLeft} title="Voltar" />
                    </Link>

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
            </Scroll>
        </Container>
    );
}