import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    font-size: 1.6rem;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.GRAY_100 : theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: .8rem;
`;