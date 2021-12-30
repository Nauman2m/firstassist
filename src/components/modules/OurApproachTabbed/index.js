import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from 'react';
import Button from '../../common/button';
import * as styles from './OurApproachTabbed.module.scss';

const OurApproachTabbed = () => {

    const [CurrentItem, setCurrentItem] = useState(0)

    function TabChange(index) {
        setCurrentItem(index);
    }
    
    const data = useStaticQuery(graphql`
        query {
            img1: file(relativePath: { eq: "community.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            img2: file(relativePath: { eq: "Holistic-Approach.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            img3: file(relativePath: { eq: "Cultural-Preservation.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            img4: file(relativePath: { eq: "programs-and-development.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)
    const items = [
        {
            button: 'Collaborative',
            title: 'Collaborative & Consultative',
            text: 'First Assist uses a collaborative approach. We implement our programs based on each Community’s Needs Analysis. We consult with multiple local community members and entities to identify issues impacting the community. Then, we invite community members to work in partnership with our instructors to further support and encourage youth to reach their goals in both school and sport.',
            img: data?.img1
        },
        {
            button: 'Holistic',
            title: 'Holistic Approach',
            text: 'Our programming introduces a 360-degree, holistic approach to improving student outcomes. Our four pillars are Education, Health, Capacity Building, and Sport. Each pillar is delivered in a set sequence depending on the Community Needs Assessment.',
            img: data?.img2
        },
        {
            button: 'Cultural',
            title: 'Cultural Preservation',
            text: 'Cultural Preservation is at the forefront of our approach. We ensure the main messages of our program are delivered through the local dialect by using local mentors. We consult with local Elders & cultural departments to implement collaborative programs that honour the local heritage and integrate cultural components wherever possible.',
            img: data?.img3
        },
        {
            button: 'Results',
            title: 'Results-Based And Results-Driven',
            text: 'Above all else, First Assist programs are results-based and results-driven. We create measurable goals and implement statistical monitoring to ensure the proper implementation of our programs and the development of our participants.',
            img: data?.img4
        },
    ]
    return (
        <div className={styles.OurApproachTabbed}>
            <div className={styles.wrap}>
                    <h2 className="UnderLine">Our <span>Approach</span></h2>
                    <div className={styles.tabNav}>
                        {
                            items.map((item, index) => {
                                return(
                                    <div className={`${styles.btnContainer} ${CurrentItem === index ? styles.active : ''}`}>
                                        <button onClick={() => TabChange(index)}>{item.button}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.content}>
                        <div className={styles.imgContainer}>
                            <GatsbyImage className={styles.img} image={getImage(items[CurrentItem].img)} alt="" />
                        </div>
                        <div className={styles.ContentBox}>
                            <div className={styles.box}>
                                <h3>{items[CurrentItem].title}</h3>
                                <p>{items[CurrentItem].text}</p>
                                <Button type="link" href="/" text="Join Us Today" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default OurApproachTabbed
