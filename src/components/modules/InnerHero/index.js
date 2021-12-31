import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import Button from '../../common/button';
import * as styles from './InnerHero.module.scss';

const InnerHero = ({HeroBg, title, Desc}) => {

    return (
        <BgImage className={styles.heroBg} image={getImage(HeroBg)}>
            <div className={styles.BgImageOverlay} style={{background: 'rgba(0, 0, 0, 0.4)'}}></div>
            <div className={styles.content}>
                <h1>{title}</h1>
                {Desc && <p>{Desc}</p>}
                <Button type="link" internal={true} href="/join-us/" text="Join Us Today" />
            </div>
            <div className={styles.BgImageShape}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1943" height="98.812" viewBox="0 0 1943 98.812" preserveAspectRatio="none">
                    <path d="M0,0Q199.075,74.109,485.75,74.109C806.262,74.109,1214.291,0,1578.6,0H1943V98.812H0"></path>
                </svg>
            </div>
        </BgImage>
    )
}

export default InnerHero
