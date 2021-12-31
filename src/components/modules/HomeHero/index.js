import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import Particles from "react-tsparticles";
import BeforeHeadingText from '../../common/BeforeHeadingText';
import Button from '../../common/button';
import * as styles from './HomeHero.module.scss';

const HomeHero = () => {

    let Params = {
        "particles": {
            "number": {
                "value": 4
            },
            "color": {
                "value": ["#fc8080", "#fc5555", "#999999", "#cccccc"]
            },
            "shape": {
                "type": ["circle"]
            },
            "size": {
                "value": 4
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "asBG": true
    }

    return (
        <div className={styles.HomeHero}>
            <Particles params={Params} className={styles.particles} canvasClassName={styles.particlesCanvas} />
            <div className={styles.HeroContent}>
                <div className={styles.Left}>
                    <div>
                        <BeforeHeadingText text="First Assist Charity" tagname="h1" />
                    </div>
                    <h2 className="UnderLine">
                        Prioritizing the Success of Every <span>Indigenous Child</span> and Teen Through Sport
                    </h2>
                    <div className={styles.Content}>
                        <p>For decades, indigenous communities have lived with certain disadvantages and through unimaginable circumstances, creating disparities in health, education, and opportunities. First Assist indigenous programs help change the statistics while emphasizing cultural preservation.</p>
                    </div>
                    <div className={styles.Cta}>
                        <div className={styles.btnContainer}>
                            <Button type="link" internal={true} href="/join-us/" text="Join Us Today" />
                        </div>
                        <div className={styles.CnContainer}>
                            <p>
                                <span>
                                    Hotline: <a href="tel:+16138692461">1-613-869-2461</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.Right}>
                    <StaticImage className={styles.Image} src="../../../images/first-assist-charity-Ottawa.jpeg" alt="first assist charity Ottawa" />
                    <div className={styles.playBtn}>
                        <a href="https://ottawa.ctvnews.ca/video?clipId=2158146" target="_blank">
                            <span>
                                <span>
                                    <FontAwesomeIcon icon={faPlay} />
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
