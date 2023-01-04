import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto; 
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content; 
        overflow-y: scroll;
        padding: 6.4rem 12.3rem;
    }
`;

export const Content = styled.div`
    max-width: 120.0rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom:4.0rem;
    }
`;

export const NewMovie = styled(Link)`
    max-width: 22rem;    
`;
