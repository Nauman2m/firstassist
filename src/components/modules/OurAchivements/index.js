import { StaticImage } from "gatsby-plugin-image";
import { gsap, TweenLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './OurAchivements.module.scss';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const OurAchivements = () => {
    const wrap = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
        TweenLite.to( CSSRulePlugin.getRule(".LightLine span::before"), 1, 
            {
                cssRule:{width: "100%"}
            }
        );
        gsap.from(".numcnt", 1, {
            textContent: 0,
            duration: 4,
            ease: "power1.in",
            snap: { textContent: 1 },
            stagger: {
              onUpdate: function() {
                this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
              },
            },
            scrollTrigger: {
              trigger: wrap.current,
              start: "-20% center",
            }
        });
    }, [])
    return (
        <div ref={wrap} className={styles.OurAchivements}>
            <div className={styles.CurveTop}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1440" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none">
					<path id="Row_Separator" data-name="Row Separator" d="M1440,0Q1080,99,720,99T0,0V100H1440Z"></path>
				</svg>
            </div>
            <div className={styles.wrap}>
                <div className={styles.top}>
                    <BeforeHeadingText text="Our Achivements" />
                    <h2 className="LightLine">Community <span>Partnership</span> Model</h2>
                </div>
                <div className={styles.gridBoxs}>
                    <div className={styles.box}>
                        <div className={styles.wrap}>
                            <StaticImage className={styles.icon} src="../../../images/demo-icon.png" alt="demo-icon" />
                            <div className={styles.content}>
                                <h3>NEEDS ANALYSIS</h3>
                                <p>We consult with multiple local community members to identify issues impacting the community.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.wrap}>
                            <StaticImage className={styles.icon} src="../../../images/demo-icon.png" alt="demo-icon" />
                            <div className={styles.content}>
                                <h3>COMMUNITY CONSULTATION</h3>
                                <p>Alongside community leadership, we develop programming to help close gaps in health and education.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.wrap}>
                            <StaticImage className={styles.icon} src="../../../images/demo-icon.png" alt="demo-icon" />
                            <div className={styles.content}>
                                <h3>INSTRUCTOR/COMMUNITY PARTNERSHIPS</h3>
                                <p>Our programs utilize mentors from outside and within the community to be sure we present programming that is culturally relevant and preserves the language and customs of the people.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.wrap}>
                            <StaticImage className={styles.icon} src="../../../images/demo-icon.png" alt="demo-icon" />
                            <div className={styles.content}>
                                <h3>PROGRAM IMPLEMENTATION</h3>
                                <p>We launch collaborative, meaningful sports-centered programming that is proven to create positive change within indigenous communities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.CurveBottom}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1440" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none">
					<path id="Row_Separator" data-name="Row Separator" d="M1440,0Q1080,99,720,99T0,0V100H1440Z"></path>
				</svg>
            </div>
        </div>
    )
}

export default OurAchivements
