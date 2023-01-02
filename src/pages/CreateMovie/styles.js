import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
    grid-area: "content";
    overflow-y: scroll;
    padding: 4rem 12.3rem;

    > h1 {
        margin-top: 2.4rem;
    }

    > .col-3 {
        display: flex;
        gap: 4rem;

        margin: 4rem auto;
    }
`;