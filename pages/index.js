import HeadTag from "../components/layouts/HeadTag"
import styles from '../styles/Main.module.css'
import {StyledBannerImage} from "../components/layouts/fullWidthComponents/bannerImage";
import {StyledGoldSection} from "../components/layouts/fullWidthComponents/goldSection";
import {StyledReadingSection} from "../components/subComponents/readingTextBlock";
import {StyledPrimaryBlueSection} from "../components/layouts/fullWidthComponents/primaryBlueSection";
import {StyledContentContainer} from "../components/subComponents/contentContainer";
import GoldLink from "../components/subComponents/goldLink";
import ResourceHub from "../components/subComponents/resourceHub";
import {StyledDarkBlueSection} from "../components/layouts/fullWidthComponents/darkBlueSection";
import VideoContainer from "../components/subComponents/videoContainer";

const Home = () => (
  <>
      <HeadTag title="Association Of Churches And Ministries" description="FRC's Association of Churches & Ministries" />
      <div className={styles.bannerImageMain}>
          <StyledBannerImage>
              <div class={styles.homepageBannerText}>
                  <h2 className={styles.h2}>WHO WE ARE</h2>
                  <p>
                      Our mission is uniting likeminded churches and ministries, across
                      denominational lines, who share the vision of impacting the culture with
                      biblical truth.
                  </p>
              </div>
          </StyledBannerImage>
      </div>
      <StyledGoldSection>
          <StyledReadingSection alignment="center">
              <em>
                <strong>
                  WE ARE CREATING A UNIFIED COMMUNITY OF CHURCHES & MINISTRIES WHO WORK
                  COLLECTIVELY TO BUILD A CULTURE IN WHICH ALL HUMAN LIFE IS VALUED, FAMILIES
                  FLOURISH, AND RELIGIOUS LIBERTY THRIVES.
                </strong>
              </em>
          </StyledReadingSection>
      </StyledGoldSection>
      <StyledPrimaryBlueSection>
          <StyledContentContainer>
              <h2 className={styles.h2}>LEARN ABOUT FRC’S ASSOCIATION OF CHURCHES & MINISTRIES</h2>
              <VideoContainer />
          </StyledContentContainer>
      </StyledPrimaryBlueSection>
      <ResourceHub />
      <StyledDarkBlueSection>
          <StyledContentContainer>
              <GoldLink href="/sign-up" displayName="JOIN THE ASSOCIATION TODAY FOR THESE ADDITIONAL RESOURCES!" />
          </StyledContentContainer>
      </StyledDarkBlueSection>
    </>
);

export default Home;
