import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './LogoFlex.module.scss';

export const fragment = graphql`
  fragment LogoFlex on WpPage_Pagesections_Sections_LogoFlex {
    buttonText
    buttonUrl
    content
    fieldGroupName
    logos {
      logo {
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

const LogoFlex = ({buttonText, buttonUrl, content, logos}) => {
    return (
        <div className={styles.LogoFlex}>
            <div className={styles.wrap}>
                <div className={styles.SectionText} dangerouslySetInnerHTML={{__html: content}} /> 
                <div className={styles.logoContainer}>
                    {
                        logos?.map((item, index) => {
                            return <GatsbyImage key={index} className={styles.logo} image={getImage(item.logo.localFile)} alt={item.logo?.altText} />
                        })
                    }
                </div>
                <div className={styles.bottom}>
                    <Link to={buttonUrl}>{buttonText}</Link>
                </div>
            </div>
        </div>
    )
}

export default LogoFlex
