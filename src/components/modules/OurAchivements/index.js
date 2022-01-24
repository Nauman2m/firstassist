import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './OurAchivements.module.scss';

export const fragment = graphql`
  fragment OurAchivements on WpPage_Pagesections_Sections_OurAchivements {
    beforeHeadingText
    fieldGroupName
    title
    gridBoxs {
      title
      text
      icon {
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

const OurAchivements = (props) => {
    const {
        beforeHeadingText,
        title,
        gridBoxs
    } = props
    
    return (
        <div className={styles.OurAchivements}>
            <div className={styles.CurveTop}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1440" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none">
					<path id="Row_Separator" data-name="Row Separator" d="M1440,0Q1080,99,720,99T0,0V100H1440Z"></path>
				</svg>
            </div>
            <div className={styles.wrap}>
                <div className={styles.top}>
                    <BeforeHeadingText text={beforeHeadingText} />
                    <div dangerouslySetInnerHTML={{__html: title}} />
                </div>
                <div className={styles.gridBoxs}>
                    {
                        gridBoxs.map((item, index) => {
                            return(
                                <div key={index} className={styles.box}>
                                    <div className={styles.wrap}>
                                        <GatsbyImage key={index} image={getImage(item.icon.localFile)} alt={item.icon?.altText} />
                                        <div className={styles.content}>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.CurveBottom}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1440" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none">
					<path id="Row_Separator" data-name="Row Separator" d="M1440,0Q1080,99,720,99T0,0V100H1440Z"></path>
				</svg>
            </div>
        </div>
    )
}

export default OurAchivements
