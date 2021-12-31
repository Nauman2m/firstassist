import { gsap, TweenLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import Button from '../../common/button';
import * as styles from './IndigenousPrograms.module.scss';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const IndigenousPrograms = () => {
    const IndigenousPrograms = useRef(null)

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
              trigger: IndigenousPrograms.current,
              start: "-20% center",
            }
        });
    }, [])
    return (
        <div ref={IndigenousPrograms} className={styles.IndigenousPrograms}>
            <div className={styles.CurveTop}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1440" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none">
					<path id="Row_Separator" data-name="Row Separator" d="M1440,0Q1080,99,720,99T0,0V100H1440Z"></path>
				</svg>
            </div>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <p>First Assist indigenous programs have proven to drastically reduce student absenteeism and increase school attendance, resulting in high school graduation rates on par with the national average.</p>
                    <div>
                        <Button type="link" internal={true} href="/join-us/" text="Get Your Community or Child Involved" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.CounterWrap}>
                        <div className={styles.CounterBox}>
                            <div className={styles.boxWrap}>
                                <div className={`${styles.CountNumb} numcnt`}>
                                    90
                                </div>
                                <div className={styles.CountText}>
                                    National Non-Indigenous High School Graduation Rates
                                </div>
                            </div>
                        </div>
                        <div className={styles.CounterBox}>
                            <div className={styles.boxWrap}>
                                <div className={`${styles.CountNumb} numcnt`}>
                                    45
                                </div>
                                <div className={styles.CountText}>
                                    National Indigenous High School Graduation Rates
                                </div>
                            </div>
                        </div>
                        <div className={styles.CounterBox}>
                            <div className={styles.boxWrap}>
                                <div className={`${styles.CountNumb} numcnt`}>
                                    90
                                </div>
                                <div className={styles.CountText}>
                                    First Assist Indigenous Program Participants High School Graduation Rates
                                </div>
                            </div>
                        </div>
                        <div className={styles.CounterBox}>
                            <div className={styles.boxWrap}>
                                <div className={`${styles.CountNumb} numcnt`}>
                                    90
                                </div>
                                <div className={styles.CountText}>
                                    First Assist Indigenous Program Participants High School Graduation Rates
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

export default IndigenousPrograms
