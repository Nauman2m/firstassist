import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import React, { useEffect, useRef } from 'react';
import * as styles from './gridItem.module.scss';

const Item = () => {
    const itemRef = useRef(null);
    const itemAnimate = useRef(null);
  
    useEffect(() => {
        itemAnimate.current = gsap.to(itemRef.current, 0.3, {
        y: 0,
        ease: "linear",
        paused: true
      });
    }, []);
  
    const onMouseEnterHandler = () => {
        itemAnimate.current.play();
    };
    const onMouseLeaveHandler = () => {
        itemAnimate.current.reverse();
    };
    return (
        <div className={`${styles.gridItem} gridboxitem`} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <StaticImage className={styles.Image} src="../../../images/charity-education.jpeg" alt="charity-education" />
            <div className={styles.contentWrap}>
                <div ref={itemRef} className={styles.content}>
                    <div className={styles.title}>
                        <h2>Education</h2>
                    </div>
                    <div className={styles.text}>
                        <p>Teaching life skills and supporting the school environment through integrative programs & processes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
