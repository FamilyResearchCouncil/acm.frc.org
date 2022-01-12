import styled from 'styled-components';

export const StyledBannerImage = styled.section`
  color: ${({ theme }) => theme.colors.isWhite};
  min-height: 400px;
  h2 {
    text-align: left;
    color: ${({ theme }) => theme.colors.primaryGold};
    margin-bottom: 0px;
  }
  display: grid;
  padding: 4rem;
  align-items: center;
  justify-items: center;
  
`;

// ../images/${props.imageName}
//  background-color: ${({ theme }) => theme.colors.primaryBlue};
//   //background-image: url(${props => props.imageUrl});