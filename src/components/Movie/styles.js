import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: none;
    border-radius: 10px;

    padding: 3.2rem;
    margin-bottom: 1.6rem;

    display: flex;
    flex-direction: column;

    > h1 {
        flex: 1; 
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-bottom: .8rem;
    }

    > div {
        display: flex;
        gap: .6rem;
        margin-bottom: 1.5rem;

        svg {
            border: none;
            fill: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > p {
        text-align: justify;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
    }
`;