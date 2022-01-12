import styled from 'styled-components';
import React from "react";

const SignatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  width: 360px;
  img {
    max-width: 100%;
    border-radius: 50%;
  }
`

const SignatureRightSide = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  img {
    max-width: 150px;
  }
`

const TonySignature = (props) => (
    <SignatureGrid>
        <img src="/img/headshots/tony-perkins.jpg" />
        <SignatureRightSide>
            <span>Standing, (Eph. 6:13)</span>
            <img src="/img/Tony_Sig_vector_white.png" />
            <span>Tony Perkins</span>
        </SignatureRightSide>
    </SignatureGrid>
);

export default TonySignature;