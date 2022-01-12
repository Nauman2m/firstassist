import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Button from '../../common/button';
import * as styles from './ImageContentFlex.module.scss';

const ImageContentFlex = ({title, content, image, reverce = false}) => {
    return (
        <div className={styles.ImageContentFlex}>
            <div className={`${styles.wrap} ${reverce ? styles.reverce : ''}`}>
                <div className={styles.img}>
                    <GatsbyImage className={styles.image} image={getImage(image)} alt="" />
                </div>
                <div className={styles.content}>
                    {title}
                    <div className={styles.text} dangerouslySetInnerHTML={{__html: content}} />
                    <div>
                        <Button type="link" internal={true} href="/join-us/" text="Join Us Today" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageContentFlex
