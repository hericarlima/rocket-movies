import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        height: 11.6rem;
        width: 100%;

        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        padding: 0 12.3rem;
        
        svg { 
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    max-width: 34rem;
    margin: 3rem auto 0; 

    display: flex;
    flex-direction: column;
    gap: .8rem;

    > div:nth-child(4) {
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -12.4rem auto 3.2rem; 

    width: 18.6rem;
    height: 18.6rem;

    > img {
        height: 18.6rem;
        width: 18.6rem;
        border-radius: 50%;
    }

    > label { 
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme })=> theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .7rem;
        right: .7rem;;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`;