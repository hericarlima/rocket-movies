import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.2rem;
    padding: .5rem 1.6rem;
    border-radius: 5px;
    margin-right: .6rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;