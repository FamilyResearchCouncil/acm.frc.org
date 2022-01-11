import AffiliateLink from "../../subComponents/affiliateLink";
import { StyledDarkBlueSection } from "./darkBlueSection";
import { StyledContentContainer } from "../../subComponents/contentContainer";
import styled from 'styled-components';

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem 2rem;
 
  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    grid-template-columns: repeat(3,1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    grid-template-columns: repeat(6,1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.xLarge}) {
   
  }
  
`

let ResourceHub = () => (
    <>
        <StyledDarkBlueSection>
            <StyledContentContainer>
                <GridDiv>
                    <AffiliateLink href="https://communityimpact.frc.org/" imgageUrl="/img/logos/ci.png"/>
                    <AffiliateLink href="https://www.frc.org/" imgageUrl="/img/logos/frc.png"/>
                    <AffiliateLink href="https://watchmenpastors.org/" imgageUrl="/img/logos/wotw.png"/>
                    <AffiliateLink href="https://standcourageous.com/" imgageUrl="/img/logos/sc.png"/>
                    <AffiliateLink href="https://frc.org/worldview" imgageUrl="/img/logos/cbw.png"/>
                    <AffiliateLink href="https://prayvotestand.org/" imgageUrl="/img/logos/pvs.png"/>
                </GridDiv>
            </StyledContentContainer>
        </StyledDarkBlueSection>
    </>
);

export default ResourceHub;