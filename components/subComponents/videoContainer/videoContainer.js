import styled from 'styled-components';
import styles from "./videoContainer.module.css"

const StyledVideoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const VideoContainer = (props) => (
    <>
        <StyledVideoContainer>
            <div className={styles.outterDiv}>
                <div className={styles.innerDiv}>
                    <iframe
                        src="https://players.brightcove.net/5194481742001/ErHOgbIwP_default/index.html?videoId=6291660312001"
                        allow="encrypted-media"
                        className={styles.videoElement}></iframe>
                </div>
            </div>
        </StyledVideoContainer>
    </>
);

export default VideoContainer;
// <div style="position: relative; display: block; max-width: 100%;">
//     <div style="padding-top: 56.25%;">
//        <video id="videoPlayer" data-video-id="6291660312001"
//                             data-account="5194481742001" data-player="UDGWqvYM9" data-embed="default"
//                             data-application-id className="video-js" controls
//                             className={styles.videoElement}></video>
//                      <script src="//players.brightcove.net/5194481742001/UDGWqvYM9_default/index.min.js"></script>
//     </div>
// </div>