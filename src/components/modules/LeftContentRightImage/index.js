import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import Button from '../../common/button';
import * as styles from './LeftContentRightImage.module.scss';

const LeftContentRightImage = () => {
    return (
        <div className={styles.LeftContentRightImage}>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <h2 className="UnderLine">What <span>We</span> Do</h2>
                    <div className={styles.Content}>
                        <p>First Assist, a registered Canadian charity, partners directly with indigenous communities to develop education programs that teach transferable life skills proven to improve school attendance and graduation rates. Indigenous communities, including children, have unfair and unnecessary disparities in health, education, and opportunities. First Assist indigenous programs help change the statistics while emphasizing cultural preservation.</p>
                    </div>
                    <div>
                        <Button type="link" href="/" text="Get Your Community or Child Involved" />
                    </div>
                </div>
                <div className={styles.right}>
                    <StaticImage className={styles.img} src="../../../images/we-do.jpeg" alt="who we are" />
                </div>
            </div>
        </div>
    )
}

export default LeftContentRightImage
