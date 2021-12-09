import gsap from "gsap";
import React, { useEffect, useRef } from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './ImageBoxGrid.module.scss';
import Item from './Item';

const ImageBoxGrid = () => {
    const wrap = useRef(null);

    useEffect(() => {
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
        
    }, [])


    
    return (
        <div ref={wrap} className={styles.ImageBoxGrid}>
            <div className={styles.wrapper}>
                <div className={styles.topContent}>
                    <BeforeHeadingText text="What We Do" />
                    <h2>Integrative Programs</h2>
                    <p>In agam debitis lobortis eum, ei viris consectetuer has. Ne vis alia utinam platonem, cu scripta delectus constituam vix. Vim posse mandamus ea. Falli facete inermis pro et.</p>
                </div>
                <div className={styles.gridWrap}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    )
}

export default ImageBoxGrid
