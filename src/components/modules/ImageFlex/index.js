import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import Marquee from "react-fast-marquee";
import * as styles from './ImageFlex.module.scss';

const ImageFlex = () => {

    return (
        <Marquee className={styles.ImageFlex} style={{}}>
            <StaticImage className={`${styles.image} m-img`} src="../../../images/01.jpg" alt="01" />
            <StaticImage className={`${styles.image} m-img`} src="../../../images/02.jpg" alt="02" />
            <StaticImage className={`${styles.image} m-img`} src="../../../images/03.jpg" alt="03" />
            <StaticImage className={`${styles.image} m-img`} src="../../../images/04.jpg" alt="04" />
        </Marquee>
    )
}

export default ImageFlex
