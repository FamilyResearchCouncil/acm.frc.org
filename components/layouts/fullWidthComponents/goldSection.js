import styled from 'styled-components';

export const StyledGoldSection = styled.section`
  color: ${({ theme }) => theme.colors.altDarkBlue};
  background-color: ${({ theme }) => theme.colors.primaryGold};
  padding: ${({ theme }) => theme.padding.sectionPadding};
`;