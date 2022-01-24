import useWindowSize from '@charlietango/use-window-size';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import * as styles from './OurMission.module.scss';
export const fragment = graphql`
  fragment OurMission on WpPage_Pagesections_Sections_OurMission {
    content
    fieldGroupName
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const OurMission = (props) => {
    const OurMissionWrap = useRef(null);
    const OurMissionImg = useRef(null);
    const { width } = useWindowSize();
    const mobileScreen = width < 768;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!mobileScreen) {
            gsap.set(OurMissionImg.current, {x: '-100%'});
            
            gsap.to(OurMissionImg.current, {
                x: 0,
                scrollTrigger: {
                  trigger: OurMissionWrap.current,
                  start: "top center",
                }
            });
        }
    }, [mobileScreen])

    const {
        content,
        image
    } = props

    return (
        <div ref={OurMissionWrap} className={styles.OurMission}>
            <div className={styles.left}>
                <div ref={OurMissionImg}>
                    <GatsbyImage className={styles.img} image={getImage(image?.localFile)} alt={image?.altText} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.contentWrap}>
                    <div className={styles.content} dangerouslySetInnerHTML={{__html: content}} />
                </div>
            </div>
        </div>
    )
}

export default OurMission
