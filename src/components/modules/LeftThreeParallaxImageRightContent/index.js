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
                        <p>First Assist is an Indigenous led charitable organization.</p>
                    </div>
                    <div className={styles.Content}>
                        <p>We have a combined 40 years of on-site Indigenous youth development. We have worked with over 3000 Indigenous youth during programming. Throughout this time, we have developed proprietary education, capacity building and health frameworks to ensure our programs fit and are tailored to community needs. Our programs were built from communicating and learning from local youth and community members! Over the past years, First Assist programs have proven to reduce student absenteeism and increase attendance and participation in school resulting in high school graduation rates on par with the National average.</p>
                    </div>
                    <Button type="link" href="/" text="Join Us Today" />
                </div>
                
            </div>
        </div>
    )
}

export default LeftThreeParallaxImageRightContent
