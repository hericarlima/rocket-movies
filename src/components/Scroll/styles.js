import styled from 'styled-components';

export const Container = styled.main`
    overflow-y: auto;
    
    ::-webkit-scrollbar {
        margin-right: 5rem;
        width: .8rem;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
        
    }
    ::-webkit-scrollbar-thumb {
        border-radius: .8rem;
        background-color: ${({ theme }) => theme.COLORS.PINK};
    }
    ::-webkit-scrollbar-thumb:hover {
        filter: brightness(0.9);
    }
`;
