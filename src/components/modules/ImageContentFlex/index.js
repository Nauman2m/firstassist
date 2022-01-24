import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Button from '../../common/button';
import * as styles from './ImageContentFlex.module.scss';

export const fragment = graphql`
  fragment ImageContentFlex on WpPage_Pagesections_Sections_ImageContentFlex {
    buttonText
    buttonUrl
    content
    fieldGroupName
    reverce
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

const ImageContentFlex = ({title, content, image, reverce = false}) => {
    return (
        <div className={styles.ImageContentFlex}>
            <div className={`${styles.wrap} ${reverce ? styles.reverce : ''}`}>
                <div className={styles.img}>
                    <GatsbyImage className={styles.image} image={getImage(image.localFile)} alt={image?.altText} />
                </div>
                <div className={styles.content}>
                    <div dangerouslySetInnerHTML={{__html: title}} />
                    <div className={styles.text} dangerouslySetInnerHTML={{__html: content}} />
                    <div>
                        <Button type="link" internal={true} href="/join-us/" text="Join Us Today" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageContentFlex
