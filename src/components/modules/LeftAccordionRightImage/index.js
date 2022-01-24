import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from 'react';
import * as styles from './LeftAccordionRightImage.module.scss';

export const fragment = graphql`
  fragment LeftAccordionRightImage on WpPage_Pagesections_Sections_LeftAccordionRightImage {
    fieldGroupName
    title
    accWidth60
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    accordionItems {
      title
      content
    }
  }
`;

const LeftAccordionRightImage = (props) => {
    const panelrefs = useRef([]);
    const btnrefs = useRef([]);

    const {
        title,
        accWidth60,
        image,
        accordionItems
    } = props
    

    console.log(accWidth60)

    function handleToggle (i) {
        panelrefs.current.map(item => item.style.maxHeight = 0)
        panelrefs.current[i].style.maxHeight = `${panelrefs.current[i].scrollHeight}px`;
        btnrefs.current.map(item => item.setAttribute("aria-expanded", "false"))
        btnrefs.current[i].setAttribute("aria-expanded", "true");
    };

    useEffect(() => {
        panelrefs.current[0].style.maxHeight = `${panelrefs.current[0].scrollHeight}px`;
        btnrefs.current[0].setAttribute("aria-expanded", "true");
    }, [])

    return (
        <div className={styles.LeftAccordionRightImage}>
            <div className={styles.wrap}>
                <div className={styles.top} dangerouslySetInnerHTML={{__html: title}} />
                <div className={`${styles.left} ${accWidth60 ? styles.width60 : ''}`}>
                    {
                        accordionItems.map((item, index) => {
                            return(
                                <div key={index} className={styles.accordionItem}>
                                    <button onClick={() => handleToggle(index)} ref={ref => btnrefs.current.push(ref)}>{item.title} <FontAwesomeIcon icon={faArrowRight} /></button>
                                    <div className={styles.text} ref={ref => panelrefs.current.push(ref)}>
                                        <div className={styles.content} dangerouslySetInnerHTML={{__html: item.content}} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`${styles.right} ${accWidth60 ? styles.width40 : ''}`}>
                    <GatsbyImage className={styles.Image} image={getImage(image.localFile)} alt={image.altText} />
                </div>
            </div>
        </div>
    )
}

export default LeftAccordionRightImage
