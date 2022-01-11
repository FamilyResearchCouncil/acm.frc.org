import styled from 'styled-components';

export const StyledLightBlueSection = styled.section`
  color: ${({ theme }) => theme.colors.isWhite};
  background-color: ${({ theme }) => theme.colors.altLightBlue};
  padding: ${({ theme }) => theme.padding.sectionPadding};
`;