import { graphql } from 'gatsby';
import React from 'react';
import * as styles from './ConsultForm.module.scss';

export const fragment = graphql`
  fragment ConsultForm on WpPage_Pagesections_Sections_ConsultForm {
    content
    fieldGroupName
  }
`;

const ConsultForm = ({content}) => {
    return (
        <div className={styles.ConsultForm}>
            <div className={styles.wrap}>
                <div className={styles.formContainer}>
                    <div className={styles.top} dangerouslySetInnerHTML={{__html: content}} />
                    <div className={styles.bottom}>
                        <form>
                            <div className={styles.inputWrap}>
                                <input type="text" name="Community" placeholder="Community" />
                            </div>
                            <div className={styles.inputWrap}>
                                <input type="text" name="Community_Number_Of_Youth" placeholder="Community number of youth" />
                            </div>
                            <div className={styles.inputWrap}>
                                <input type="text" name="Province" placeholder="Province" />
                            </div>
                            <div className={styles.inputWrap}>
                                <input type="text" name="Contact_Name" placeholder="Contact Name" />
                            </div>
                            <div className={styles.inputWrap}>
                                <input type="text" name="Local_Position" placeholder="Local Position" />
                            </div>
                            <div className={styles.inputWrap}>
                                <input name="Phone_Number" type="text" placeholder="Phone Number" />
                            </div>
                            <div className={`${styles.inputWrap} ${styles.inputWrapFull}`}>
                                <input name="email" type="email" placeholder="Email Address" />
                            </div>
                            <div className={`${styles.inputWrap} ${styles.inputWrapFull}`}>
                                <textarea name="message" placeholder="Please share any details" rows="10" cols="50" />
                            </div>
                            <div className={`${styles.inputWrap} ${styles.inputWrapFull}`}>
                                <input type="button" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultForm
