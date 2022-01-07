import useWindowSize from '@charlietango/use-window-size';
import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import * as styles from './OurMission.module.scss';

const OurMission = () => {
    const OurMissionWrap = useRef(null);
    const OurMissionImg = useRef(null);
    const { width } = useWindowSize();
    const mobileScreen = width < 768;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!mobileScreen) {
            gsap.set(OurMissionImg.current, {x: '-100%'});
            
            gsap.to(OurMissionImg.current, {
                x: 0,
                scrollTrigger: {
                  trigger: OurMissionWrap.current,
                  start: "top center",
                }
            });
        }
    }, [mobileScreen])

    return (
        <div ref={OurMissionWrap} className={styles.OurMission}>
            <div className={styles.left}>
                <div ref={OurMissionImg}>
                    <StaticImage className={styles.img} src="../../../images/first-assist-mission.jpg" alt="first-assist-mission" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.contentWrap}>
                    <div className={styles.content}>
                        <h2 className="UnderLine">Our <span>Mission</span></h2>
                        <p>Our primary goal is to help all students in indigenous communities obtain their high school diploma by using sport as a motivational tool to promote school attendance and increase classroom engagement while learning how to be healthy and active for life.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission
