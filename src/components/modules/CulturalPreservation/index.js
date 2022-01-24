import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Button from '../../common/button';
import * as styles from './CulturalPreservation.module.scss';

export const fragment = graphql`
  fragment CulturalPreservation on WpPage_Pagesections_Sections_CulturalPreservation {
    buttonText
    buttonUrl
    title
    textHighlight
    fieldGroupName
    content
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

const CulturalPreservation = (props) => {

    const {
        buttonText,
        buttonUrl,
        title,
        textHighlight,
        content,
        image,
    } = props

    return (
        <div className={styles.CulturalPreservation}>
            <div className={styles.left}>
            <GatsbyImage image={getImage(image?.localFile)} alt={image?.altText} />
            </div>
            <div className={styles.right}>
                <div className={styles.wrap}>
                    <div dangerouslySetInnerHTML={{__html: title}} />
                    <div className={styles.textHighlight} dangerouslySetInnerHTML={{__html: textHighlight}} />
                    <div className={styles.ListElm}>
                        <div dangerouslySetInnerHTML={{__html: content}} />
                        <Button type="link" internal={true} href={buttonUrl} text={buttonText} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CulturalPreservation
