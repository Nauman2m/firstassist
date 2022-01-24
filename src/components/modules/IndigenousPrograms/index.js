import { graphql } from 'gatsby';
import { gsap, TweenLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import Button from '../../common/button';
import * as styles from './IndigenousPrograms.module.scss';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const fragment = graphql`
  fragment IndigenousPrograms on WpPage_Pagesections_Sections_IndigenousPrograms {
    buttonText
    buttonUrl
    text
    fieldGroupName
    counterBoxes {
      text
      number
    }
  }
`;

const IndigenousPrograms = (props) => {
    const IndigenousPrograms = useRef(null)

    const {
        buttonText,
        buttonUrl,
        text,
        counterBoxes,
    } = props

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
                    <div dangerouslySetInnerHTML={{__html: text}} />
                    <div>
                        <Button type="link" internal={true} href={buttonUrl} text={buttonText} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.CounterWrap}>
                        {
                            counterBoxes.map((item, index) => {
                                return(
                                    <div className={styles.CounterBox}>
                                        <div className={styles.boxWrap}>
                                            <div className={`${styles.CountNumb} numcnt`}>
                                                {item.number}
                                            </div>
                                            <div className={styles.CountText}>
                                                {item.text}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
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
