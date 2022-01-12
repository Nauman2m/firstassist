import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from 'react';
import * as styles from './LeftAccordionRightImage.module.scss';

const LeftAccordionRightImage = ({accordionItem, title, image, accordionWidth60 = false}) => {
    const panelrefs = useRef([]);
    const btnrefs = useRef([]);

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
                <div className={styles.top}>
                    <h2>{title}</h2>
                </div>
                <div className={`${styles.left} ${accordionWidth60 ? styles.width60 : ''}`}>
                    {
                        accordionItem.map((item, index) => {
                            return(
                                <div key={index} className={styles.accordionItem}>
                                    <button onClick={() => handleToggle(index)} ref={ref => btnrefs.current.push(ref)}>{item.title} <FontAwesomeIcon icon={faArrowRight} /></button>
                                    <div className={styles.text} ref={ref => panelrefs.current.push(ref)}>
                                        <div className={styles.content} dangerouslySetInnerHTML={{__html: item.text}} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`${styles.right} ${accordionWidth60 ? styles.width40 : ''}`}>
                    <GatsbyImage className={styles.Image} image={getImage(image)} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LeftAccordionRightImage
