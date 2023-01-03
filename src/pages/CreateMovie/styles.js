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

    h2 {
        font-size: 2rem;
        font-weight: normal;

        margin-top: 4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    
    .tags {
        width: 100%;
        padding: 1.6rem;
        border-radius: .8rem;

        display: flex;
        gap: 2.4rem;

        margin-top: 2.4rem;
        background-color: ${({ theme }) => theme.COLORS.DARK};
    }

    .buttons {
        display: flex;
        gap: 4rem;
        margin-top: 4rem;

        button:first-child {
            background-color: ${({ theme }) => theme.COLORS.DARK};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;