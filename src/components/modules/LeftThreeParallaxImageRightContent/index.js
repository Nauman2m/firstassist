import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import Button from '../../common/button';
import * as styles from './LeftThreeParallaxImageRightContent.module.scss';
gsap.registerPlugin(ScrollTrigger);

const LeftThreeParallaxImageRightContent = () => {

    useEffect(() => {
        gsap.to(".parallaxEl", 1, {
            yPercent: -50,
            ease: "linear",
            scrollTrigger: {
              trigger: ".wrapEl",
              start: "-10% center",
              scrub: 1,
              //markers: true
            }
        });
        
    }, [])

    return (
        <div className={`${styles.LeftThreeParallaxImageRightContent} wrapEl`}>
            <div className={styles.wrap}>
                <div className={`${styles.left} leftEl`}>
                    <StaticImage className={`${styles.parallaxImage} parallaxEl`} src="../../../images/charity-organization-toronto.jpeg" alt="charity-organization-toronto" />
                    <StaticImage className={`${styles.parallaxImage} parallaxEl`} width={324} height={392} src="../../../images/basketball-support.jpeg" alt="basketball-support" />
                    <StaticImage className={`${styles.parallaxImage} parallaxEl`} width={394} height={503} src="../../../images/baseball-charity-support.jpeg" alt="baseball-charity-support" />
                </div>
                <div className={styles.right}>
                    <BeforeHeadingText text="About Us" />
                    <h2 className="UnderLine">Who <span>We</span> Are</h2>
                    <div className={styles.TextHighLight}>
                        <p>First Assist is a registered Canadian charity</p>
                    </div>
                    <div className={styles.Content}>
                        <p>that focuses on the implementation of indigenous education programs that have the potential to change lives. We work with communities to develop programming that teaches transferable life skills proven to improve school attendance and graduation rates.</p>
                    </div>
                    <Button type="link" href="/" text="Join Us Today" />
                </div>
                
            </div>
        </div>
    )
}

export default LeftThreeParallaxImageRightContent
