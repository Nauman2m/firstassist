import useWindowSize from '@charlietango/use-window-size';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './ImageBoxGrid.module.scss';
import Item from './Item';

const Items = [
    {
        title: 'EDUCATION',
        text: 'Providing programming that enhances the indigenous education experience is a critical outcome and success indicator of our charitable organization.',
        img: '../../../images/charity-education.jpeg',
    },
    {
        title: 'CAPACITY BUILDING',
        text: 'Our community partnerships and programming strengthen the skills and abilities of indigenous communities by providing opportunities to share knowledge and experience, thus amplifying the likelihood of youth to thrive in any circumstance.',
        img: '../../../images/charity-education.jpeg',
    },
    {
        title: 'HEALTH',
        text: 'Through sports education and programming, we emphasize the critical need for prioritizing health and wellness - both physically and mentally.',
        img: '../../../images/charity-education.jpeg',
    },
    {
        title: 'SPORT',
        text: 'We aim to improve the athletic abilities of participants and mentors, offering skill development in athletics and coaching/instruction.',
        img: '../../../images/charity-education.jpeg',
    },
]

const ImageBoxGrid = () => {
    const wrap = useRef(null);
    const { width } = useWindowSize();
    const mobileScreen = width < 768;

    console.log(mobileScreen)

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
                    <BeforeHeadingText text="What We Do" />
                    <h2>Four Pillars of Programming</h2>
                </div>
                <div className={styles.gridWrap}>
                    {
                        Items.map((item, index) => {
                            return <Item key={index} title={item.title} text={item.text} image={item.img} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageBoxGrid
