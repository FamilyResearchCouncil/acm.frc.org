import styled from 'styled-components';

export const StyledGoldLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.primaryBlue};
  background-color: ${({ theme }) => theme.colors.primaryGold};
  text-transform: UPPERCASE;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 1.6rem;
  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.altLightBlue};
  }

`;