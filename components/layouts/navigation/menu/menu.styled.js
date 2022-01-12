import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  background: ${({ theme }) => theme.colors.transparentBlack};
  width: 100vw;
  text-align: left;
  padding: 2rem 6rem 2rem 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.widths.mobileMenu}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.isWhite};
    text-decoration: none;
    transition: color 0.3s linear;
    margin-left: 4rem;
    
    @media (max-width: ${({ theme }) => theme.widths.mobileMenu}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.altLightBlue};
    }
  }
`;