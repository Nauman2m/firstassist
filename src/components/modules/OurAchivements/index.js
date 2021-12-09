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
                <div className={styles.left}>
                    <BeforeHeadingText text="Our Achivements" />
                    <h2 className="LightLine">Success Through <span>Sport</span></h2>
                    <p>Building and shaping healthy habits and behavioral responses through structured sport integration programs.</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.CounterWrap}>
                        <div className={styles.CounterBox}>
                            <div className={styles.boxWrap}>
                                <div className={`${styles.CountNumb} numcnt`}>
                                    40
                                </div>
                                <div className={styles.CountText}>
                                    Years of development
                                </div>
                            </div>
                        </div>
                        <div className={styles.CounterBox}>
                            <div className={styles.boxWrap}>
                                <div className={`${styles.CountNumb} ${styles.CountNumbWithPlus} numcnt`}>
                                    3000
                                </div>
                                <div className={styles.CountText}>
                                    Indigenous Youth Network
                                </div>
                            </div>
                        </div>
                        <div className={styles.CounterBox}>
                            <div className={styles.boxWrap}>
                                <div className={`${styles.CountNumb} ${styles.CountNumbWithPlus} numcnt`}>
                                    50
                                </div>
                                <div className={styles.CountText}>
                                    Community Partners
                                </div>
                            </div>
                        </div>
                        <div className={styles.CounterBox}>
                            <div className={styles.boxWrap}>
                                <div className={`${styles.CountNumb} numcnt`}>
                                    15
                                </div>
                                <div className={styles.CountText}>
                                    Integrative Programs
                                </div>
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
