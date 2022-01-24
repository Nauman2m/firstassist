import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from 'react';
import Button from '../../common/button';
import * as styles from './OurApproachTabbed.module.scss';

export const fragment = graphql`
  fragment Tabbed on WpPage_Pagesections_Sections_Tabbed {
    fieldGroupName
    title
    tabitems {
      title
      content
      buttonText
      buttonUrl
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

const Tabbed = ({tabitems, title}) => {

    const [CurrentItem, setCurrentItem] = useState(0)

    function TabChange(index) {
        setCurrentItem(index);
    }
    
    return (
        <div className={styles.OurApproachTabbed}>
            <div className={styles.wrap}>
                    <div dangerouslySetInnerHTML={{__html: title}} />
                    <div className={styles.tabNav}>
                        {
                            tabitems.map((item, index) => {
                                return(
                                    <div className={`${styles.btnContainer} ${CurrentItem === index ? styles.active : ''}`}>
                                        <button onClick={() => TabChange(index)}>{item.title}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.content}>
                        <div className={styles.imgContainer}>
                            <GatsbyImage className={styles.img} image={getImage(tabitems[CurrentItem].image.localFile)} alt={tabitems[CurrentItem].image.altText} />
                        </div>
                        <div className={styles.ContentBox}>
                            <div className={styles.box}>
                                <div dangerouslySetInnerHTML={{__html: tabitems[CurrentItem].content}} />
                                <Button type="link" internal={true} href={tabitems[CurrentItem].buttonUrl} text={tabitems[CurrentItem].buttonText} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Tabbed
