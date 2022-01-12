import React, { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import styled from "styled-components";
import GoldLink from "../components/subComponents/goldLink";
import Head from "next/head";
import StaffListing from "../components/subComponents/staffList";
import TonySignature from "../components/subComponents/tonySignature"
import {StyledBannerImage} from "../components/layouts/fullWidthComponents/bannerImage";
import {StyledReadingSection} from "../components/subComponents/readingTextBlock";
import {StyledLightBlueSection} from "../components/layouts/fullWidthComponents/lightBlueSection";
import {StyledContentContainer} from "../components/subComponents/contentContainer";
import {StyledPrimaryBlueSection} from "../components/layouts/fullWidthComponents/primaryBlueSection";
import {StyledDarkBlueSection} from "../components/layouts/fullWidthComponents/darkBlueSection";

let AboutUs = () => (
    <>
        <Head>
            <title>About Us</title>
            <meta name="description" content="About FRC's Association of Churches & Ministries" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.bannerImageAlt}>
            <StyledBannerImage>

            </StyledBannerImage>
        </div>
        <StyledLightBlueSection>
            <StyledContentContainer>
                <h2 className={` ${styles.h2} ${styles.h2NoMargin} `}>OUR VISION</h2>
            </StyledContentContainer>
        </StyledLightBlueSection>
        <StyledPrimaryBlueSection>
            <StyledContentContainer>
                <StyledReadingSection alignment="center">
                    WE ARE CREATING A UNIFIED COMMUNITY OF CHURCHES & MINISTRIES
                    WHO WORK COLLECTIVELY TO BUILD A CULTURE
                    IN WHICH ALL HUMAN LIFE IS VALUED,
                    FAMILIES FLOURISH,
                    AND RELIGIOUS LIBERTY THRIVES.
                </StyledReadingSection>
            </StyledContentContainer>
        </StyledPrimaryBlueSection>
        <StyledLightBlueSection>
            <StyledContentContainer>
                <h2 className={` ${styles.h2} ${styles.h2NoMargin} `}>OUR MISSION</h2>
            </StyledContentContainer>
        </StyledLightBlueSection>
        <StyledPrimaryBlueSection>
            <StyledContentContainer>
                <StyledReadingSection alignment="center">
                    UNITE WITH LIKE-MINDED CHURCHES & MINISTRIES
                    ACROSS DENOMINATIONAL LINES
                    THAT SHARE THE VISION OF IMPACTING THE CULTURE
                    WITH BIBLICAL TRUTH
                </StyledReadingSection>
            </StyledContentContainer>
        </StyledPrimaryBlueSection>
        <StyledLightBlueSection>
            <StyledContentContainer>
                <h2 className={` ${styles.h2} ${styles.h2NoMargin} `}>MEET OUR TEAM</h2>
            </StyledContentContainer>
        </StyledLightBlueSection>
        <StyledPrimaryBlueSection>
            <StyledContentContainer>
                <StaffListing />
            </StyledContentContainer>
        </StyledPrimaryBlueSection>
        <StyledDarkBlueSection>
            <StyledContentContainer>
                <GoldLink href="/" displayName="READ OUR STATEMENT OF FAITH" />
            </StyledContentContainer>
        </StyledDarkBlueSection>
        <StyledLightBlueSection>
            <StyledContentContainer>
                <h2 className={` ${styles.h2} ${styles.h2NoMargin} `}>A MESSAGE FROM THE PRESIDENT</h2>
            </StyledContentContainer>
        </StyledLightBlueSection>
        <StyledDarkBlueSection>
            <StyledContentContainer>
                <StyledReadingSection>
                    <p>
                    Responding with clarity to the confusion and crises ever-present in the culture is a struggle with which
                    the church is growing all too familiar. The church battles with this - in part - because we have an identity
                    crisis of our own. We need to decide if we want to be aligned with God’s Word and proclaim its truth or
                    succumb to the world’s false narrative of “truth.” Do we want to actually follow Jesus unequivocally or
                    will we choose to surrender?
                    </p>
                    <p>
                    We are told to keep our religion to ourselves and some of us do. We are assured that if we do not
                    comply, there will be consequences. And there are. So we must decide: will we do what the world tells
                    us to do or will we do what Jesus tells us to do?
                    </p>
                    <p>
                    Family Research Council is answering this call to stand firm with our Association of Churches and
                    Ministries for those who have counted the cost and choose to stand with us. We equip churches,
                    pastors, ministries, and ministry leaders to be Ambassadors for the truth in a world that either hates the
                    truth or denies it exists. We are building a community of churches and ministries who refuse to hide
                    their faith in Jesus because of the incitement of fear or discrimination driven by today’s cancel culture.
                    </p>
                    <p>
                    We want to surround you with those who will stand beside you, unafraid and unashamed, to confront
                    the challenges right in front of us. I can guarantee one thing to you: we will always choose to stand for
                    the truth of God’s Word. If this represents you too, we hope you’ll join us.
                    </p>
                    <TonySignature />
                </StyledReadingSection>
            </StyledContentContainer>
        </StyledDarkBlueSection>
    </>
);

export default AboutUs;