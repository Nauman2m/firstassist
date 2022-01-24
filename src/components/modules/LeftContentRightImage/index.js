import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Button from '../../common/button';
import * as styles from './LeftContentRightImage.module.scss';

export const fragment = graphql`
  fragment LeftContentRightImage on WpPage_Pagesections_Sections_LeftContentRightImage {
    buttonText
    buttonUrl
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

const LeftContentRightImage = (props) => {
    const {
        buttonText,
        buttonUrl,
        content,
        image
    } = props
    
    return (
        <div className={styles.LeftContentRightImage}>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <div className={styles.content} dangerouslySetInnerHTML={{__html: content}} />
                    <div>
                        <Button type="link" internal={true} href={buttonUrl} text={buttonText} />
                    </div>
                </div>
                <div className={styles.right}>
                    <GatsbyImage className={styles.img} image={getImage(image?.localFile)} alt={image?.altText} />
                </div>
            </div>
        </div>
    )
}

export default LeftContentRightImage
