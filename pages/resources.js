import React, { useEffect, useState } from "react";
import Head from 'next/head'
import styles from "../styles/Main.module.css";
import GoldLink from "../components/subComponents/goldLink";
import ResourceHub from "../components/subComponents/resourceHub";
import { StyledPrimaryBlueSection } from '../components/layouts/fullWidthComponents/primaryBlueSection';
import { StyledDarkBlueSection } from '../components/layouts/fullWidthComponents/darkBlueSection';
import { StyledLightBlueSection } from '../components/layouts/fullWidthComponents/lightBlueSection';
import { StyledBannerImage } from "../components/layouts/fullWidthComponents/bannerImage";
import { StyledReadingSection } from '../components/subComponents/readingTextBlock';
import { StyledContentContainer } from '../components/subComponents/contentContainer';
import ResourceList from "../components/subComponents/resourceList";


let Resources = () => (
    <>
        <Head>
            <title>Resources</title>
            <meta name="description" content="Resources for pastors" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*<h1 className={styles.title}>Resources</h1>*/}
        <div className={styles.bannerImageAlt}>
            <StyledBannerImage>

            </StyledBannerImage>
        </div>
        <StyledLightBlueSection>
            <StyledReadingSection alignment="center">
                As a part of the Association of Churches & Ministries, our network of pastors and ministry leaders have
                access to exclusive resources and benefits. The resource hub below is a sample of some of the resources
                we provide to our members.
            </StyledReadingSection>
        </StyledLightBlueSection>
        <StyledPrimaryBlueSection>
            <StyledContentContainer>
                <div className={styles.gridColumns2}>
                    <GoldLink href="/" displayName="NOT A MEMBER? JOIN NOW!" />
                    <GoldLink href="/" displayName="MEMBER LOGIN" />
                </div>
            </StyledContentContainer>
        </StyledPrimaryBlueSection>
            <ResourceHub />
        <StyledPrimaryBlueSection>
            <StyledContentContainer>
                <StyledReadingSection>
                    <h2 className={styles.h2}>ADDITIONAL RESOURCES FOR ACM MEMBERS</h2>
                    <ResourceList />
                </StyledReadingSection>
            </StyledContentContainer>
        </StyledPrimaryBlueSection>
        <StyledDarkBlueSection>
            <StyledContentContainer>
            <GoldLink href="/" displayName="JOIN THE ASSOCIATION TODAY FOR THESE ADDITIONAL RESOURCES!" />
            </StyledContentContainer>
        </StyledDarkBlueSection>
    </>
);

export default Resources;