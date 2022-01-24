import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './SliderTopContentBottomImage.module.scss';


export const fragment = graphql`
  fragment SliderTopContentBottomImage on WpPage_Pagesections_Sections_SliderTopContentBottomImage {
    beforeHeadingText
    fieldGroupName
    slides {
      title
      text
      image {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const SliderTopContentBottomImage = ({beforeHeadingText, slides}) => {
    const [CurrentSlide, setCurrentSlide] = useState(0)

    const Next = () => {
        if(CurrentSlide >= slides.length - 1){
            setCurrentSlide(0);
          }else{
            setCurrentSlide(CurrentSlide + 1);
        }
    }

    const Previous = () => {
        if(CurrentSlide <= 0){
            setCurrentSlide(slides.length - 1);
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
                        <div className={styles.title} dangerouslySetInnerHTML={{__html: slides[CurrentSlide].title}} />
                        <div className={styles.text} dangerouslySetInnerHTML={{__html: slides[CurrentSlide].text}} />
                    </div>
                    <div className={styles.image}>
                        <GatsbyImage className={styles.img} image={getImage(slides[CurrentSlide]?.image?.localFile)} alt={slides[CurrentSlide]?.image?.altText} />
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
