import React from 'react'
import * as styles from './BeforeHeadingText.module.scss'

const BeforeHeadingText = ({text}) => {
    return (
        <h6 className={styles.BeforeHeadingText}>
            {text}
        </h6>
    )
}

export default BeforeHeadingText
