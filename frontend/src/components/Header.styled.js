import styled from 'styled-components';

export const StyledHeader = styled.header`
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: flex;
    background: ${({ theme }) => theme.primaryColor};
    align-items: center;
    letter-spacing: 2px;
  }
`;
