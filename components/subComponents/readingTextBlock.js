import styled from 'styled-components';

export const StyledReadingSection = styled.p`
  max-width: ${ ({ theme }) => theme.widths.readingWidth };
  margin: 0 auto;
  text-align: ${props => props.alignment === '' ? 'left' : props.alignment };
`;