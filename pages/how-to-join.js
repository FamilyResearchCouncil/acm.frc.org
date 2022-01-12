import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import GoldLink from "../components/subComponents/goldLink";
import Head from "next/head";
import ResourceList from "../components/subComponents/resourceList";
import { StyledPrimaryBlueSection } from '../components/layouts/fullWidthComponents/primaryBlueSection';
import {StyledBannerImage} from "../components/layouts/fullWidthComponents/bannerImage";
import {StyledReadingSection} from "../components/subComponents/readingTextBlock";
import {StyledLightBlueSection} from "../components/layouts/fullWidthComponents/lightBlueSection";
import {StyledContentContainer} from "../components/subComponents/contentContainer";
import {StyledDarkBlueSection} from "../components/layouts/fullWidthComponents/darkBlueSection";

let HowToJoin = () => (
    <>
        <Head>
            <title>How To Join</title>
            <meta name="description" content="How To Join FRC's Association of Churches & Ministries" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*<h1 className={styles.title}>How To Join</h1>*/}
        <div className={styles.bannerImageAlt}>
            <StyledBannerImage>

            </StyledBannerImage>
        </div>
        <StyledLightBlueSection>
            <StyledReadingSection alignment="center">
                Joining the Association of Churches & Ministries is simple. Sign up using our online form and we will
                provide you with all of these resources and benefits:
            </StyledReadingSection>
        </StyledLightBlueSection>
        <StyledPrimaryBlueSection>
            <StyledContentContainer>
                <StyledReadingSection>
                    <h2 className={styles.h2}>EXCLUSIVE ACCESS</h2>
                    <ResourceList />
                </StyledReadingSection>
            </StyledContentContainer>
        </StyledPrimaryBlueSection>
        <StyledLightBlueSection>
            <StyledReadingSection alignment="center">
                In addition, we will provide a central hub within the ACM member page with quick and easy
                access to all of these resources of our ministries. Ordering hard copies of any of our resources
                can be done through this hub to receive special discounts as ACM members!
            </StyledReadingSection>
        </StyledLightBlueSection>
        <StyledPrimaryBlueSection>
            <StyledContentContainer>
                <StyledReadingSection>
                    <h2 className={styles.h2}>INCLUDED</h2>
                    <ul>
                        <li>Center for Biblical Worldview team and resources</li>
                        <li>Discount on all resources available through our ministry</li>
                        <li>Stand Courageous Men’s Ministry Resources & Conferences</li>
                        <li>Family Research Council policy and ministry resources</li>
                        <li>All Resources and videos of Pray, Vote, Stand</li>
                        <li>Washington Watch with Tony Perkins</li>
                        <li>Washington Update from Tony Perkins delivered to your inbox daily</li>
                        <li>Special Invitations to all ministry and organization events</li>
                    </ul>
                </StyledReadingSection>
            </StyledContentContainer>
        </StyledPrimaryBlueSection>
        <StyledDarkBlueSection>
            <StyledContentContainer>
                <div className={styles.gridColumns2}>
                    <GoldLink href="/sign-up" displayName="NOT A MEMBER? JOIN NOW!" />
                    <GoldLink href="/" displayName="MEMBER LOGIN" />
                </div>
            </StyledContentContainer>
        </StyledDarkBlueSection>
    </>

);

export default HowToJoin;