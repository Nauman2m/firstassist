import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './OurAchivements.module.scss';

const OurAchivements = () => {

    return (
        <div className={styles.OurAchivements}>
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
                            <StaticImage className={styles.icon} src="../../../images/need-analysis.png" alt="demo-icon" />
                            <div className={styles.content}>
                                <h3>Needs Analysis</h3>
                                <p>We consult with multiple local community members to identify issues impacting the community.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.wrap}>
                            <StaticImage className={styles.icon} src="../../../images/Community-Consultation.png" alt="demo-icon" />
                            <div className={styles.content}>
                                <h3>Community Consultation</h3>
                                <p>Alongside community leadership, we develop programming to help close gaps in health and education.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.wrap}>
                            <StaticImage className={styles.icon} src="../../../images/Instructor-Community-Partnerships.png" alt="demo-icon" />
                            <div className={styles.content}>
                                <h3>Instructor/Community Partnerships</h3>
                                <p>Our programs utilize mentors from outside and within the community to be sure we present programming that is culturally relevant and preserves the language and customs of the people.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.wrap}>
                            <StaticImage className={styles.icon} src="../../../images/Program-Implementation.png" alt="demo-icon" />
                            <div className={styles.content}>
                                <h3>Program Implementation</h3>
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
