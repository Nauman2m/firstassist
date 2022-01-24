import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Marquee from "react-fast-marquee";
import * as styles from './ImageFlex.module.scss';

export const fragment = graphql`
  fragment ImageFlex on WpPage_Pagesections_Sections_ImageFlex {
    fieldGroupName
    images {
      image {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const ImageFlex = ({images}) => {

    return (
        <Marquee className={styles.ImageFlex} style={{}}>
            {
                images.map((item, index) => {
                    return(
                        <GatsbyImage key={index} className={`${styles.image} m-img`} image={getImage(item?.image?.localFile)} alt={item?.image?.altText} />
                    )
                })
            }
        </Marquee>
    )
}

export default ImageFlex
