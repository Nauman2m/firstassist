import React from 'react';
import * as styles from './BeforeHeadingText.module.scss';

const BeforeHeadingText = ({text, tagname = 'h6'}) => {
    const CustomTag = tagname;
    return (
        <CustomTag className={styles.BeforeHeadingText}>
            {text}
        </CustomTag>
    )
}

export default BeforeHeadingText
