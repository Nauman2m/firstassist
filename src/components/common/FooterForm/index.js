import React from 'react'
import * as styles from './FooterForm.module.scss'

const FooterForm = () => {
    return (
        <div className={styles.FooterForm}>
            <form>
                <div className={styles.inputWrap}>
                    <input type="text" name="name" placeholder="Full Name" />
                </div>
                <div className={styles.inputWrap}>
                    <input name="email" type="email" placeholder="Email Address" />
                </div>
                <div className={styles.inputWrap}>
                    <input name="phone" type="text" placeholder="Phone Number" />
                </div>
                <div className={styles.inputWrap}>
                    <textarea name="message" placeholder="Message / Inquiry" rows="4" cols="50" />
                </div>
                <div className={styles.inputWrap}>
                    <input type="button" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default FooterForm
