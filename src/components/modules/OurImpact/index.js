import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import Button from '../../common/button';
import * as styles from './OurImpact.module.scss';

export const fragment = graphql`
  fragment OurImpact on WpPage_Pagesections_Sections_OurImpact {
    buttonText
    buttonUrl
    content
    fieldGroupName
    sectionbg {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const OurImpact = (props) => {

    const { sectionbg, content, buttonText, buttonUrl } = props;

console.log('dslkfjkdfj')
    return (
        <BgImage className={styles.OurImpact} image={getImage(sectionbg?.localFile)}>
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={{__html: content}} />
                <Button type="link" internal={true} href={buttonUrl} text={buttonText} />
            </div>
        </BgImage>
    )
}

export default OurImpact
