import { Link } from 'gatsby'
import React from 'react'
import * as styles from './button.module.scss'

export default function Button({type, href, internal = false, style, text, ...props}) {
    
    if (type === 'button') {
        return (
            <button className={styles.button} {...props}>{text}</button>
        )
    } else if (type === 'link' && internal === true) {
        return (
            <Link className={styles.button} to={href} {...props}>{text}</Link>
        )
    }else if (type === 'link' && internal === false) {
        return (
            <a className={styles.button} href={href} {...props}>{text}</a>
        )
    }
}
