import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
    grid-area: content; 
    overflow-y: auto;
    padding: 6.4rem 12.3rem;

    display: flex;
    flex-direction: column;

    > .stars {
        display: flex;
        align-items: center;
        gap: 1.9rem;

        margin-top: 2.4rem;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            fill: ${({ theme }) => theme.COLORS.PINK};
        }

        svg:last-child {
            fill: none;
        }
    }

    > .tags {
        display: flex;
        text-align: center;

        margin-top: 4rem;
    }

    > p {
        text-align: justify;
        margin-top: 4rem;
    }

    > button {
        margin-top: 4rem;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2.4rem;

    > .user {
        display: flex;
        align-items: center;
        gap: .8rem;

        img {
            height: 1.6rem;
            width: 1.6rem;
            border-radius: 50%;
        }
    }

    > .update {
        display: flex;
        align-items: center;
        gap: .8rem;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            fill: transparent;
        }
    }
   
`;