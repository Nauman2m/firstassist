import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from 'react';
import * as styles from './LeftAccordionRightImage.module.scss';

const accordionItem = [
    {
        title: 'Proactive Opposed To Reactive',
        text: 'First Assist proactively addresses long-term education and health issues by promoting healthy habits for life. Our goal is to have all participants graduate from secondary school. We provide coping tools, goal setting exercises, and positive reinforcement to encourage and lead our participants to that end.'
    },
    {
        title: 'Quality & Qualified Teachers & Coaches',
        text: 'Our teachers  and coaches must have a history of being great role models within their own communities and exemplify the “3 Cs of Our Internal Culture: Compassionate, Considerate and Communicative.” All teachers have qualifications in their respective provinces. All coaches have qualifications in their respective sports. Most of all, all staff are proven role models and actively engage youth and community in their personal lives. We believe our organization is only as strong as each of our team members.'
    },
    {
        title: 'Engagement Of Youth And Community',
        text: 'We believe the success of youth is directly related to the involvement of the community. We partner with community members and encourage community involvement in our programs so the entire community can benefit and take responsibility for the success of our programs. Every person that takes part in our program can benefit from it, so the entire community has the opportunity to become healthier and develop lifelong skills.'
    },
    {
        title: 'Empowerment Through Leadership',
        text: 'Leadership training workshops and curriculum development allow local interns to develop the skills to engage and monitor local participants. The end goal is self-sufficient programming; we want to be able to leave a community and allow local leaders to continue to run our program with equal levels of success.'
    },
    {
        title: 'Skills Transfer',
        text: 'We want to provide community members with skills and strategies to teach and coach in their respective sport, so communities can continue to grow and establish sports programs in their towns.'
    },
    {
        title: 'Quality Tools & Process',
        text: 'We have built a number of different tools to enhance our program and integrative processes. We’ve developed an app and use technology tools to help participants adapt to new learning methodology pertinent to engaging youth. We continuously reinforce a positive learning environment and use tools to track individual and group progress.'
    },
    {
        title: 'Feedback & Reiteration',
        text: 'Throughout all program stages, we gather feedback, actively and passively to learn, and adapt the program to fit community needs. We generate monthly reports and host local meetings to be sure we’re meeting and exceeding the community&apos;s expectations.'
    },
]

const LeftAccordionRightImage = () => {
    const panelrefs = useRef([]);
    const btnrefs = useRef([]);

    function handleToggle (i) {
        panelrefs.current.map(item => item.style.maxHeight = 0)
        panelrefs.current[i].style.maxHeight = `${panelrefs.current[i].scrollHeight}px`;
        btnrefs.current.map(item => item.setAttribute("aria-expanded", "false"))
        btnrefs.current[i].setAttribute("aria-expanded", "true");
    };

    useEffect(() => {
        panelrefs.current[0].style.maxHeight = `${panelrefs.current[0].scrollHeight}px`;
        btnrefs.current[0].setAttribute("aria-expanded", "true");
    }, [])

    const {image} = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "Implementation.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)

    return (
        <div className={styles.LeftAccordionRightImage}>
            <div className={styles.wrap}>
                <div className={styles.top}>
                    <h2>Implementation</h2>
                </div>
                <div className={styles.left}>
                    {
                        accordionItem.map((item, index) => {
                            return(
                                <div key={index} className={styles.accordionItem}>
                                    <button onClick={() => handleToggle(index)} ref={ref => btnrefs.current.push(ref)}>{item.title} <FontAwesomeIcon icon={faArrowRight} /></button>
                                    <div className={styles.text} ref={ref => panelrefs.current.push(ref)}>
                                        <div className={styles.content}>
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.right}>
                    <GatsbyImage className={styles.Image} image={getImage(image)} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LeftAccordionRightImage
