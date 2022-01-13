import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import styled from "styled-components";
import GoldLink from "../components/subComponents/goldLink";
import Head from "next/head";
import {StyledBannerImage} from "../components/layouts/fullWidthComponents/bannerImage";
import {StyledReadingSection} from "../components/subComponents/readingTextBlock";
import {StyledPrimaryBlueSection} from "../components/layouts/fullWidthComponents/primaryBlueSection";

const MinHeightDiv = styled.div`
  height: 50vh;
  display: grid;
  align-content: center;
  justify-content: center;
`

let SignUp = () => (
    <>
        <Head>
            <title>Sign Up</title>
            <meta name="description" content="Sign Up To Join The Association of Churches And Ministries" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.bannerImageAlt}>
            <StyledBannerImage>

            </StyledBannerImage>
        </div>
        <StyledPrimaryBlueSection>
            <StyledReadingSection>
                <MinHeightDiv>
                <h2 className={styles.h2}>WHO ARE YOU?</h2>
                <div className={styles.gridColumns2}>
                    <GoldLink href="https://signup.acm.frc.org/church" displayName="A CHURCH" />
                    <GoldLink href="https://signup.acm.frc.org/ministry" displayName="MINISTRY OR MINISTER" />
                </div>
                </MinHeightDiv>
            </StyledReadingSection>
        </StyledPrimaryBlueSection>
    </>
);

export default SignUp;