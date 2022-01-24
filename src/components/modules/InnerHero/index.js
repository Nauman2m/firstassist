import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import Button from '../../common/button';
import * as styles from './InnerHero.module.scss';

export const fragment = graphql`
  fragment InnerHero on WpPage_Pagesections_Sections_InnerHero {
    bgimageoverlay
    buttonText
    buttonUrl
    content
    fieldGroupName
    herobg {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const InnerHero = (props) => {
    const {
        bgimageoverlay,
        buttonText,
        buttonUrl,
        content,
        herobg,
    } = props

    return (
        <BgImage className={styles.heroBg} image={getImage(herobg?.localFile)}>
            {bgimageoverlay && <div className={styles.BgImageOverlay} style={{background: bgimageoverlay}} />}
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{__html: content}} />
                <Button type="link" internal={true} href={buttonUrl} text={buttonText} />
            </div>
            <div className={styles.BgImageShape}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1943" height="98.812" viewBox="0 0 1943 98.812" preserveAspectRatio="none">
                    <path d="M0,0Q199.075,74.109,485.75,74.109C806.262,74.109,1214.291,0,1578.6,0H1943V98.812H0"></path>
                </svg>
            </div>
        </BgImage>
    )
}

export default InnerHero
