import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Button from '../../common/button';
import * as styles from './CharitableOrganization.module.scss';

export const fragment = graphql`
  fragment CharitableOrganization on WpPage_Pagesections_Sections_CharitableOrganization {
    buttonText
    buttonUrl
    content
    fieldGroupName
    sectionContent
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

const CharitableOrganization = (props) => {
    const {
        buttonText,
        buttonUrl,
        content,
        sectionContent,
        image
    } = props
    
    return (
        <div className={styles.CharitableOrganization}>
            <div className={styles.top} dangerouslySetInnerHTML={{__html: sectionContent}} />
            <div className={styles.bottom}>
                <div className={styles.CurveTop}>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1943" height="98.812" viewBox="0 0 1943 98.812" preserveAspectRatio="none">
                        <path d="M0,0Q199.075,74.109,485.75,74.109C806.262,74.109,1214.291,0,1578.6,0H1943V98.812H0"></path>
                    </svg>
                </div>
                <div className={styles.wrap}>
                    <div className={styles.left}>
                        <GatsbyImage className={styles.image} image={getImage(image?.localFile)} alt={image?.altText} />
                    </div>
                    <div className={styles.right}>
                        <img className={styles.overlayImg} src="/images/canadian-map.png" alt="" />
                        <div dangerouslySetInnerHTML={{__html: content}} />
                        <Button type="link" internal={true} href={buttonUrl} text={buttonText} />
                    </div>
                </div>
                <div className={styles.CurveBottom}>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1943" height="98.812" viewBox="0 0 1943 98.812" preserveAspectRatio="none">
                        <path d="M0,0Q199.075,74.109,485.75,74.109C806.262,74.109,1214.291,0,1578.6,0H1943V98.812H0"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CharitableOrganization
