import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './ImageFlex.module.scss';

const ImageFlex = () => {
    return (
        <div className={styles.ImageFlex}>
            <StaticImage className={styles.image} src="../../../images/02.jpg" alt="02" />
            <StaticImage className={styles.image} src="../../../images/02.jpg" alt="02" />
            <StaticImage className={styles.image} src="../../../images/02.jpg" alt="02" />
            <StaticImage className={styles.image} src="../../../images/02.jpg" alt="02" />
        </div>
    )
}

export default ImageFlex
