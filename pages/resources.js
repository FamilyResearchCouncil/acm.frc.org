import React, { useEffect, useState } from "react";
import Head from 'next/head'
import styles from "../styles/Home.module.css";
import GoldLink from "../components/subComponents/goldLink";
import ResourceHub from "../components/layouts/fullWidthComponents/resourceHub";
import { StyledPrimaryBlueSection } from '../components/layouts/fullWidthComponents/primaryBlueSection';
import { StyledDarkBlueSection } from '../components/layouts/fullWidthComponents/darkBlueSection';
import { StyledLightBlueSection } from '../components/layouts/fullWidthComponents/lightBlueSection';
import { StyledBannerImage } from "../components/layouts/fullWidthComponents/bannerImage";
import { StyledReadingSection } from '../components/subComponents/readingTextBlock';
import { StyledContentContainer } from '../components/subComponents/contentContainer';


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
                HELLO THERE!!!
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
                <GoldLink href="/" displayName="NOT A MEMBER? JOIN NOW!" />
                <GoldLink href="/" displayName="MEMBER LOGIN" />
            </StyledContentContainer>
        </StyledPrimaryBlueSection>
       <ResourceHub />
        <StyledPrimaryBlueSection>
            <StyledContentContainer>
                <StyledReadingSection>
                    ADDITIONAL RESOURCES FOR ACM MEMBERS
                    <ul>
                        <li>Prayer Ministry and Contacts for your Leadership</li>
                        <li>Annual Briefing in Washington, D.C.</li>
                        <li>Regularly scheduled virtual meetings and updates</li>
                        <li>Complimentary Community Impact Team start-up materials and leader training.</li>
                        <li>Crisis Response Team for cancel-culture attacks on your ministry to provide support.</li>
                        <li>Your church/ministry listed within our network & shared as a recommended ministry.</li>
                        <li>Update emails highlighting leading stories from Washington, D.C.</li>
                        <li>Invitation-Only events</li>
                    </ul>
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