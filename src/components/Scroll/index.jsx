import {Container } from './styles';

export function Scroll({ children, ...rest }) {
    return (
        <Container {...rest }>
            {children}
        </Container>
    );
}