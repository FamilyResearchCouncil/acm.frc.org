import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import GoldLink from "../components/subComponents/goldLink";
import { StyledPrimaryBlueSection } from '../components/layouts/fullWidthComponents/primaryBlueSection';

let HowToJoin = () => (
    <>
        <h1 className={styles.title}>How To Join</h1>
        <StyledPrimaryBlueSection>
        <GoldLink href="/" displayName="NOT A MEMBER? JOIN NOW!" />
        <GoldLink href="/" displayName="MEMBER LOGIN" />
        </StyledPrimaryBlueSection>
    </>

);

export default HowToJoin;