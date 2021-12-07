import { StaticImage } from "gatsby-plugin-image";
import { gsap, TweenLite } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import React, { useEffect } from 'react';
import Particles from "react-tsparticles";
import Button from '../../common/button';
import * as styles from './HomeHero.module.scss';

const HomeHero = () => {
    
    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin);
        TweenLite.to( CSSRulePlugin.getRule(".UnderLine span::before"), 1, {cssRule:{width: "100%"}});
    }, [])
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
        <section className={styles.HomeHero}>
            <Particles params={Params} className={styles.particles} canvasClassName={styles.particlesCanvas} />
            <div className={styles.HeroContent}>
                <div className={styles.Left}>
                    <h1 className="UnderLine">
                        An Indigenous <span>Charitable Organization</span> Motivating Youth to Achieve & Succeed
                    </h1>
                    <div className={styles.Content}>
                        <p>Lorem ipsum dolor sit amet, eos ex iudicabit argumentum, no mei sumo accusata honestatis ullum decore.</p>
                    </div>
                    <div className={styles.Cta}>
                        <div className={styles.btnContainer}>
                            <Button type="link" href="/" text="Join Us Today" />
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
                    <StaticImage src="../../../images/first-assist-charity-Ottawa.jpeg" alt="first assist charity Ottawa" />
                </div>
            </div>
        </section>
    )
}

export default HomeHero
