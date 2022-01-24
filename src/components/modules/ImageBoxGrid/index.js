import useWindowSize from '@charlietango/use-window-size';
import { graphql } from 'gatsby';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './ImageBoxGrid.module.scss';
import Item from './Item';

export const fragment = graphql`
  fragment ImageBoxGrid on WpPage_Pagesections_Sections_ImageBoxGrid {
    beforeHeadingText
    fieldGroupName
    title
    grid3
    gridItems {
      title
      text
      link
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

const ImageBoxGrid = (props) => {
    const wrap = useRef(null);
    const { width } = useWindowSize();
    const mobileScreen = width < 768;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!mobileScreen) {
            gsap.to(".gridboxitem", 1, {
                yPercent: 10,
                ease: "linear",
                stagger: {
                    each: 0.6
                },
                scrollTrigger: {
                  trigger: wrap.current,
                  start: "-20% center",
                  scrub: 1
                }
            });
        }
    }, [width])

    const {
        beforeHeadingText,
        title,
        grid3,
        gridItems
    } = props

    return (
        <div ref={wrap} className={styles.ImageBoxGrid}>
            <div className={styles.wrapper}>
                <div className={styles.topContent}>
                    {beforeHeadingText && <BeforeHeadingText text={beforeHeadingText} />}
                    <div dangerouslySetInnerHTML={{__html: title}} />
                </div>
                <div className={`${styles.gridWrap} ${grid3 ? styles.grid3 : ''}`}>
                    {
                        gridItems?.map((item, index) => {
                            return <Item key={index} title={item.title} text={item.text} image={item.image.localFile} alt={item.image.altText} grid3={grid3} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageBoxGrid