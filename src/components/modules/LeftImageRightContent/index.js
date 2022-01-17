import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import Button from '../../common/button';
import * as styles from './LeftImageRightContent.module.scss';

const LeftImageRightContent = () => {

    return (
        <div className={`${styles.LeftThreeParallaxImageRightContent} wrapEl`}>
            <div className={styles.wrap}>
                <div className={`${styles.left} leftEl`}>
                    <StaticImage src="../../../images/who-we-are.png" alt="who we are" />
                </div>
                <div className={styles.right}>
                    <div>
                        <BeforeHeadingText text="About Us" />
                    </div>
                    <h2 className="UnderLine">Who <span>We</span> Are</h2>
                    <div className={styles.TextHighLight}>
                        <p>First Assist is a registered Canadian charity</p>
                    </div>
                    <div className={styles.Content}>
                        <p>that focuses on the implementation of indigenous education programs that have the potential to change lives. We work with communities to develop programming that teaches transferable life skills proven to improve school attendance and graduation rates.</p>
                    </div>
                    <div>
                        <Button type="link" internal={true} href="/join-us/" text="More About Us" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LeftImageRightContent
