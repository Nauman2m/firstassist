import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './gridItem.module.scss';

const Item = ({title, text, image}) => {
    return (
        <a href="#" className={`${styles.gridItem} gridboxitem`}>
            <StaticImage className={styles.Image} src="../../../images/charity-education.jpeg" alt="charity-education" />
            <div className={styles.contentWrap}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.text}>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Item
