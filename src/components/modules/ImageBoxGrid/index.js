import useWindowSize from '@charlietango/use-window-size';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './ImageBoxGrid.module.scss';
import Item from './Item';

const ImageBoxGrid = ({Items, grid3 = false, title, beforeTitle}) => {
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

    return (
        <div ref={wrap} className={styles.ImageBoxGrid}>
            <div className={styles.wrapper}>
                <div className={styles.topContent}>
                    {beforeTitle && <BeforeHeadingText text={beforeTitle} />}
                    <h2>{title}</h2>
                </div>
                <div className={`${styles.gridWrap} ${grid3 ? styles.grid3 : ''}`}>
                    {
                        Items?.map((item, index) => {
                            return <Item key={index} title={item.title} text={item.text} image={item.img} grid3={grid3} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageBoxGrid