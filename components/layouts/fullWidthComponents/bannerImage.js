import styled from 'styled-components';

export const StyledBannerImage = styled.section`
  color: ${({ theme }) => theme.colors.isWhite};
  min-height: 300px;
`;

// ../images/${props.imageName}
//  background-color: ${({ theme }) => theme.colors.primaryBlue};
//   //background-image: url(${props => props.imageUrl});