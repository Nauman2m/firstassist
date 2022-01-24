import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import Particles from "react-tsparticles";
import BeforeHeadingText from '../../common/BeforeHeadingText';
import Button from '../../common/button';
import * as styles from './HomeHero.module.scss';

export const fragment = graphql`
  fragment HomeHero on WpPage_Pagesections_Sections_HomeHero {
    fieldGroupName
    buttonText
    buttonUrl
    hotelineText
    hotelineNumber
    title
    text
    playButtonUrl
    roundedBgText {
        text
        tagName
    }
    image {
        altText
        localFile {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
  }
`;

const HomeHero = (props) => {

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
    const {
        title,
        roundedBgText,
        text,
        buttonText,
        buttonUrl,
        hotelineText,
        hotelineNumber,
        image,
        playButtonUrl
    } = props
    return (
        <div className={styles.HomeHero}>
            <Particles params={Params} className={styles.particles} canvasClassName={styles.particlesCanvas} />
            <div className={styles.HeroContent}>
                <div className={styles.Left}>
                    {roundedBgText && <div>
                        <BeforeHeadingText text={roundedBgText?.text} tagname={roundedBgText?.tagName ?? 'h6'} />
                    </div>}
                    {title && <div dangerouslySetInnerHTML={{__html: title}} />}
                    <div className={styles.Content} dangerouslySetInnerHTML={{__html: text}} />
                    <div className={styles.Cta}>
                        <div className={styles.btnContainer}>
                            <Button type="link" internal={true} href={buttonUrl} text={buttonText} />
                        </div>
                        <div className={styles.CnContainer}>
                            <p>
                                <span>
                                    Hotline: <a href={hotelineNumber}>{hotelineText}</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.Right}>
                    <GatsbyImage className={styles.Image} image={getImage(image.localFile)} alt={image?.altText} />
                    {playButtonUrl && <div className={styles.playBtn}>
                        <a href={playButtonUrl ?? '#'} target="_blank">
                            <span>
                                <span>
                                    <FontAwesomeIcon icon={faPlay} />
                                </span>
                            </span>
                        </a>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default HomeHero
