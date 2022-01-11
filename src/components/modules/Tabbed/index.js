import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from 'react';
import Button from '../../common/button';
import * as styles from './OurApproachTabbed.module.scss';

const Tabbed = ({tabitems, title}) => {

    const [CurrentItem, setCurrentItem] = useState(0)

    function TabChange(index) {
        setCurrentItem(index);
    }
    
    return (
        <div className={styles.OurApproachTabbed}>
            <div className={styles.wrap}>
                    {title}
                    <div className={styles.tabNav}>
                        {
                            tabitems.map((item, index) => {
                                return(
                                    <div className={`${styles.btnContainer} ${CurrentItem === index ? styles.active : ''}`}>
                                        <button onClick={() => TabChange(index)}>{item.button}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.content}>
                        <div className={styles.imgContainer}>
                            <GatsbyImage className={styles.img} image={getImage(tabitems[CurrentItem].img)} alt="" />
                        </div>
                        <div className={styles.ContentBox}>
                            <div className={styles.box}>
                                <h3>{tabitems[CurrentItem].title}</h3>
                                <div dangerouslySetInnerHTML={{__html: tabitems[CurrentItem].text}} />
                                <Button type="link" internal={true} href="/join-us/" text="Join Us Today" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Tabbed
