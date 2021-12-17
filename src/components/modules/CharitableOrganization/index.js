import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import Button from '../../common/button';
import * as styles from './CharitableOrganization.module.scss';

const CharitableOrganization = () => {
    return (
        <div className={styles.CharitableOrganization}>
            <div className={styles.top}>
                <h2>How Does First Assist Charitable Organization Create Positive Change?</h2>
                <p>When kids participate in sports, amazing things happen!</p>
            </div>
            <div className={styles.bottom}>
                <div className={styles.CurveTop}>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1943" height="98.812" viewBox="0 0 1943 98.812" preserveAspectRatio="none">
                        <path d="M0,0Q199.075,74.109,485.75,74.109C806.262,74.109,1214.291,0,1578.6,0H1943V98.812H0"></path>
                    </svg>
                </div>
                <div className={styles.wrap}>
                    <div className={styles.left}>
                        <StaticImage className={styles.image} src="../../../images/how-we-work.png" alt="how-we-work" />
                    </div>
                    <div className={styles.right}>
                        <img className={styles.overlayImg} src="/images/canadian-map.png" alt="" />
                        <h3>Active Childhoods Lead To:</h3>
                        <ul>
                            <li>Less childhood and adult obesity</li>
                            <li>Up to 40% higher test scores in school</li>
                            <li>Less smoking and drug use</li>
                            <li>Fewer teen pregnancies</li>
                            <li>A marked increase in high school graduation rates</li>
                            <li>A marked increase in the likelihood of college attendance</li>
                            <li>Lower levels of depression and mental illness</li>
                            <li>Better self-esteem in young adulthood</li>
                            <li>Higher salaries</li>
                            <li>Fewer health issues and lower health-related costs</li>
                            <li>More opportunities for workplace advancement</li>
                        </ul>
                        <Button type="link" href="/" text="Join With Us" />
                    </div>
                </div>
                <div className={styles.CurveBottom}>
                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1943" height="98.812" viewBox="0 0 1943 98.812" preserveAspectRatio="none">
                        <path d="M0,0Q199.075,74.109,485.75,74.109C806.262,74.109,1214.291,0,1578.6,0H1943V98.812H0"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CharitableOrganization
