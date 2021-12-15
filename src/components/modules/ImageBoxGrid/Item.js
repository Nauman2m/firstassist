import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import React, { useEffect, useRef } from 'react';
import * as styles from './gridItem.module.scss';

const Item = ({title, text, image}) => {
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
        <a href="#" className={`${styles.gridItem} gridboxitem`} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <StaticImage className={styles.Image} src="../../../images/charity-education.jpeg" alt="charity-education" />
            <div className={styles.contentWrap}>
                <div ref={itemRef} className={styles.content}>
                    <div className={styles.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.text}>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Item
