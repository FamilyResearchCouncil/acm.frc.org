import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import GoldLink from "../components/buttonAndLinks/goldLink";

const WrapperDiv = styled.div`
  display: grid;
  grid-gap: 15px;
  margin-bottom: 30px;
  background-color: ${({theme}) => theme.colors.primaryBlue};
`;

let AboutUs = () => (
    <>
        <WrapperDiv>
            <h1 className={styles.title}>About Us</h1>
            <GoldLink href="/" displayName="READ OUR STATEMENT OF FAITH" />
        </WrapperDiv>
    </>
);

export default AboutUs;