import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import Button from '../../common/button';
import * as styles from './CulturalPreservation.module.scss';

const CulturalPreservation = () => {
    return (
        <div className={styles.CulturalPreservation}>
            <div className={styles.left}>
                <StaticImage src="../../../images/Cultural-Preservation.png" alt="Cultural Preservation" />
            </div>
            <div className={styles.right}>
                <div className={styles.wrap}>
                    <h2>Cultural Preservation</h2>
                    <div className={styles.textHighlight}>
                        <p>Our work means nothing if it comes at the cost of preserving and uplifting the cultures and traditions of the Metis, Inuit, Cree, and other indigenous communities and tribes throughout Canada. </p>
                    </div>
                    <div className={styles.ListElm}>
                        <h3>How we participate in cultural preservation:</h3>
                        <ul>
                            <li>We ensure delivery of the main messages of our programs are in the local dialect.</li>
                            <li>We collaborate with local mentors so participants develop deeper relationships with positive role models in their communities.</li>
                            <li>We consult with local Elders & cultural departments to be sure our programs honor local heritage.</li>
                            <li>Wherever possible, we integrate cultural components and celebrations into our programs, for the enjoyment of the participants and for the indigenous education of our organization, employees, and volunteers.</li>
                        </ul>
                        <Button type="link" href="/" text="Join With Us" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CulturalPreservation
