import styled from 'styled-components';


export const Container = styled.header`
    grid-area: header; //fixo no scroll página

    height: 11.6rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_700 };

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 12.3rem;

    > h1 {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
   
    > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 1.6rem;

        span {
            display: inline;
            font-size: 1.4rem;
            font-weight: bold;
            color: ${ ({ theme }) => theme.COLORS.GRAY_100 };
        }

        button {
            font-size: 1.4rem;
            text-decoration: none;
            color: ${ ({ theme }) => theme.COLORS.GRAY_300 };
        }
    }
`;




