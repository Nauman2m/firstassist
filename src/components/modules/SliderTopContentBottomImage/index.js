import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './SliderTopContentBottomImage.module.scss';

const SliderTopContentBottomImage = () => {
    const [CurrentSlide, setCurrentSlide] = useState(0)

    const data = useStaticQuery(graphql`
    query {
        img1: file(relativePath: { eq: "Technology-to-enhance.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img2: file(relativePath: { eq: "Learning-Environment.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img3: file(relativePath: { eq: "education-first.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img4: file(relativePath: { eq: "Teacher-Retention.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
  `)

    const Items = [
        {
            title: 'Technology To Enhance Our Learning Environment',
            text: 'We use technology pertinent to youth to provide a more engaging learning environment. Our app provides animated, video game-like versions of drills to provide improved visual learning cues. We send these animated lessons and drills to youth via a player app to ensure more prepared, active learners during our program lessons.',
            img: data?.img1,
        },
        {
            title: 'Our Learning Environment',
            text: 'We look at all our sessions, whether it be our fundamentals class, training sessions, or competitive games, as opportunities for participation in positive learning environments. We integrate policies, procedures, and tools that help lead to responses the community would like to implement through the program. We ensure there is always an underlying life skill or habit we are reinforcing through the program implementation.',
            img: data?.img2,
        },
        {
            title: 'Education First',
            text: 'First Assist believes in education first. In the communities where our programs operate, we work daily with the local education institutes to ensure quality standards provided by the school are respected and upheld.',
            img: data?.img3,
        },
        {
            title: 'Teacher Retention',
            text: 'Our team has a number of teachers that work in the local schools during school hours and act as instructors in the evenings. They specifically chose to join our organization because they value the opportunity to positively impact youth. Through our recruitment processes, we can retain teacher-instructors if there is a need with the local school community.',
            img: data?.img2,
        }
    ]

    const Next = () => {
        if(CurrentSlide >= Items.length - 1){
            setCurrentSlide(0);
          }else{
            setCurrentSlide(CurrentSlide + 1);
        }
    }

    const Previous = () => {
        if(CurrentSlide <= 0){
            setCurrentSlide(Items.length - 1);
          }else{
            setCurrentSlide(CurrentSlide - 1);
        }
    }
  
    return (
        <div className={styles.SliderTopContentBottomImage}>
            <div className={styles.wrap}>
                <BeforeHeadingText text="Education" />
                <div className={styles.sliderContainer}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h2>{Items[CurrentSlide].title}</h2>
                        </div>
                        <div className={styles.text}>
                            <p>{Items[CurrentSlide].text}</p>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <GatsbyImage className={styles.img} image={getImage(Items[CurrentSlide].img)} alt="" />
                        <div className={styles.nav}>
                            <button onClick={Previous}><FontAwesomeIcon icon={faArrowLeft} /></button>
                            <button onClick={Next}><FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderTopContentBottomImage
