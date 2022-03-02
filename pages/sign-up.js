import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import styled from "styled-components";
import GoldLink from "../components/subComponents/goldLink";
import HeadTag from "../components/layouts/HeadTag"
import {StyledBannerImage} from "../components/layouts/fullWidthComponents/bannerImage";
import {StyledReadingSection} from "../components/subComponents/readingTextBlock";
import {StyledPrimaryBlueSection} from "../components/layouts/fullWidthComponents/primaryBlueSection";

const MinHeightDiv = styled.div`
  height: 50vh;
  display: grid;
  align-content: center;
  justify-content: center;
`

const SignUp = () => (
    <>
        <HeadTag title="Sign Up" description="Sign up to join the Association of Churches And Ministries" />
        <div className={styles.bannerImageAlt}>
            <StyledBannerImage>

            </StyledBannerImage>
        </div>
        <StyledPrimaryBlueSection>
            <StyledReadingSection>
                <MinHeightDiv>
                <h2 className={styles.h2}>WHO ARE YOU?</h2>
                <div className={styles.gridColumns2}>
                    <GoldLink href="https://signup.acm.frc.org/church" displayName="CHURCH, MINISTRY, OR ORGANIZATION" />
                    <GoldLink href="https://signup.acm.frc.org/ministry" displayName="INDIVIDUAL" />
                </div>
                </MinHeightDiv>
            </StyledReadingSection>
        </StyledPrimaryBlueSection>
    </>
);

export default SignUp;