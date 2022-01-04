import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './gridItem.module.scss';

const Item = ({title, text, image, grid3}) => {
    return (
        <a href="#" className={`${styles.gridItem} gridboxitem ${grid3 ? styles.grid3 : ''}`}>
            <GatsbyImage className={styles.Image} image={getImage(image)} alt="" />
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
