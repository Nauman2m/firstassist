import { graphql } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import Button from '../../common/button';
import * as styles from './LeftImageRightContent.module.scss';

export const fragment = graphql`
  fragment LeftImageRightContent on WpPage_Pagesections_Sections_LeftImageRightContent {
    beforeHeadingText
    buttonText
    buttonUrl
    content
    fieldGroupName
    textHighlight
    title
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

const LeftImageRightContent = (props) => {
    const {
        beforeHeadingText,
        buttonText,
        buttonUrl,
        content,
        textHighlight,
        title,
        image
    } = props

    return (
        <div className={`${styles.LeftThreeParallaxImageRightContent} wrapEl`}>
            <div className={styles.wrap}>
                <div className={`${styles.left} leftEl`}>
                    <StaticImage src="../../../images/who-we-are.jpg" alt="who we are" />
                </div>
                <div className={styles.right}>
                    <div>
                        <BeforeHeadingText text={beforeHeadingText} />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: title}} />
                    <div className={styles.TextHighLight} dangerouslySetInnerHTML={{__html: textHighlight}} />
                    <div className={styles.Content} dangerouslySetInnerHTML={{__html: content}} />
                    <div>
                        <Button type="link" internal={true} href={buttonUrl} text={buttonText} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LeftImageRightContent
