import { FiArrowLeft, FiStar } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function MoviePreview() {
    return(
        <Container>
            <Header />

            <main>
                <Content>
                        <ButtonText icon={FiArrowLeft} title="Voltar" />
                    <div>
                        <h1>Interestellar</h1>
                        <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
                    </div>
                </Content>
            </main>
        </Container>
    );
}