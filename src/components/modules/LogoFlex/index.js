import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './LogoFlex.module.scss';

const LogoFlex = () => {
    return (
        <div className={styles.LogoFlex}>
            <div className={styles.SectionText}>
                <p>Partner With Us</p>
            </div>
            <div className={styles.logoContainer}>
                <StaticImage className={styles.logo} src="../../../images/birks.jpeg" alt="Logo Flex" />
                <StaticImage className={styles.logo} src="../../../images/scotiabank.jpeg" alt="Logo Flex" />
                <StaticImage className={styles.logo} src="../../../images/anish-branding.jpeg" alt="Logo Flex" />
                <StaticImage className={styles.logo} src="../../../images/active-nation.jpeg" alt="Logo Flex" />
                <StaticImage className={styles.logo} src="../../../images/senatros-community-foundation.png" alt="Logo Flex" />
                <StaticImage className={styles.logo} src="../../../images/scotiabank.jpeg" alt="Logo Flex" />
            </div>
        </div>
    )
}

export default LogoFlex
