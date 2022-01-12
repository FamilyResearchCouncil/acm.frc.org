import styled from 'styled-components';

export const StyledDarkBlueSection = styled.section`
  color: ${({ theme }) => theme.colors.isWhite};
  background-color: ${({ theme }) => theme.colors.altDarkBlue};
  padding: ${({ theme }) => theme.padding.sectionPadding};
  h2 {
    color: ${({ theme }) => theme.colors.altLightBlue};
  }
`;