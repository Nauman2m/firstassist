import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './LogoFlex.module.scss';

const LogoFlex = () => {
    return (
        <div className={styles.LogoFlex}>
            <div className={styles.wrap}>
                <div className={styles.SectionText}>
                    <h2>Your Donation Matters</h2>
                    <p>Partner with Canada’s premiere sports-centred indigenous charitable organization and be part of the solution.</p>
                </div>
                <div className={styles.logoContainer}>
                    <StaticImage className={styles.logo} src="../../../images/birks.png" alt="Logo Flex" />
                    <StaticImage className={styles.logo} src="../../../images/scotiabank.png" alt="Logo Flex" />
                    <StaticImage className={styles.logo} src="../../../images/anish-branding.png" alt="Logo Flex" />
                    <StaticImage className={styles.logo} src="../../../images/active-nation.png" alt="Logo Flex" />
                    <StaticImage className={styles.logo} src="../../../images/senatros-community-foundation.png" alt="Logo Flex" />
                    <StaticImage className={styles.logo} src="../../../images/scotiabank.png" alt="Logo Flex" />
                </div>
                <div className={styles.bottom}>
                    <Link to="/join-us/">Partner With Us</Link>
                </div>
            </div>
        </div>
    )
}

export default LogoFlex
