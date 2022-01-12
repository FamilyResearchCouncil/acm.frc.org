import styled from "styled-components";
import StaffLink from "./staffLink";
import React from "react";

const ExecGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 6rem 2rem;
 
  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    grid-template-columns: repeat(3,1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    //grid-template-columns: repeat(6,1fr);
  }
`
const StaffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 6rem 2rem;
 
  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    grid-template-columns: repeat(3,1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    grid-template-columns: repeat(6,1fr);
  }
`


const StaffListing = () => (
    <>
        <ExecGrid>
            <StaffLink href="https://www.frc.org/tony-perkins" imgageUrl="/img/headshots/tony-perkins.jpg" staffName="Tony Perkins"/>
            <StaffLink href="https://www.frc.org/biography/william-boykin" imgageUrl="/img/headshots/general-boykin.jpg" staffName="Gen. Jerry Boykin"/>
            <StaffLink href="https://www.frc.org/staff" imgageUrl="/img/headshots/mark-harris.jpg" staffName="Mark Harris"/>
        </ExecGrid>
        <br /><br /><br />
        <StaffGrid>
            <StaffLink href="https://www.frc.org/randy-wilson" imgageUrl="/img/headshots/randy-wilson.jpg" staffName="Randy Wilson"/>
        </StaffGrid>
    </>
);

  export default StaffListing;