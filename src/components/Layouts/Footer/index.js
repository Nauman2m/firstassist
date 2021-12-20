import { faChild, faEnvelopeOpenText, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterForm from '../../common/FooterForm';
import * as styles from './footerstyle.module.scss';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.topDivider}>
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="1943" height="98.812" viewBox="0 0 1943 98.812" preserveAspectRatio="none">
					<path d="M0,0Q199.075,74.109,485.75,74.109C806.262,74.109,1214.291,0,1578.6,0H1943V98.812H0"></path>
				</svg>
            </div>
            <div className={styles.FooterWrap}>
                <h2>Contact Information</h2>
                <div className={styles.FooterRow}>
                    <div className={styles.FooterCol1}>
                        <ul>
                            <li>
                                <span>
                                    <FontAwesomeIcon className={styles.Icon} icon={faPhoneVolume} />
                                </span>
                                <a href="tel:+16138692461">1-613-869-2461</a>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className={styles.Icon} icon={faEnvelopeOpenText} />
                                </span>
                                <a href="mailto:team@firstassist.ca">team@firstassist.ca</a>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className={styles.Icon} icon={faMapMarkerAlt} />
                                </span>
                                <a href="https://goo.gl/maps/bowxuYm717PMM57D6" target="_blank" rel="noreferrer">838 Colonel By Drive Ottawa, Ontario K1S 5C4</a>
                            </li>
                            <li>
                                <span>
                                    <FontAwesomeIcon className={styles.Icon} icon={faChild} />
                                </span>
                                <p>Charity Registration: 819648338RR0001</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.FooterCol2}>
                        <h5>About Us</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Virtual</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Community Commitment</a></li>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">Join First Assist</a></li>
                        </ul>
                    </div>
                    <div className={styles.FooterCol3}>
                        <FooterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
