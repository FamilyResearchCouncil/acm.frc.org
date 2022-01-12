import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import GoldLink from "../components/subComponents/goldLink";
import { StyledPrimaryBlueSection } from '../components/layouts/fullWidthComponents/primaryBlueSection';
import Head from "next/head";

let HowToJoin = () => (
    <>
        <Head>
            <title>How To Join</title>
            <meta name="description" content="How To Join FRC's Association of Churches & Ministries" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*<h1 className={styles.title}>How To Join</h1>*/}
        <StyledPrimaryBlueSection>
        <GoldLink href="/" displayName="NOT A MEMBER? JOIN NOW!" />
        <GoldLink href="/" displayName="MEMBER LOGIN" />
        </StyledPrimaryBlueSection>
    </>

);

export default HowToJoin;