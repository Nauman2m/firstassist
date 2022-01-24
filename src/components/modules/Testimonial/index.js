import { graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from 'react';
import Slider from "react-slick";
import * as styles from './Testimonial.module.scss';

export const fragment = graphql`
  fragment Testimonial on WpPage_Pagesections_Sections_Testimonial {
    fieldGroupName
    testimonials {
      text
      author
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

const Testimonial = ({testimonials}) => {

    const SliderSettings = {
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={styles.Testimonial}>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <StaticImage className={styles.img1} src="../../../images/portrait-2@2x-1.jpg" alt="charity-Testimonial" />
                    <StaticImage className={styles.img2} src="../../../images/3@2x.jpg" alt="charity-Testimonial" />
                    <StaticImage className={styles.img3} src="../../../images/testi-1@2x-1.jpg" alt="charity-Testimonial" />
                </div>
                <div className={styles.center}>
                    <h3>What We Achived</h3>
                    <h2>What People Say About Us</h2>
                    <Slider {...SliderSettings} className={styles.slider}>
                        {
                            testimonials.map((slide, index) => {
                                return(
                                    <div key={index} className="solutions-item">
                                        <GatsbyImage className={styles.img2} image={getImage(slide?.image?.localFile)} alt={slide?.image?.altText} />
                                        <p>{slide.text}</p>
                                        <p className={styles.author}>{slide.author}</p>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className={styles.right}>
                    <StaticImage className={styles.img1} src="../../../images/6@2x.jpg" alt="charity-Testimonial" />
                    <StaticImage className={styles.img2} src="../../../images/4@2x.jpg" alt="charity-Testimonial" />
                    <StaticImage className={styles.img3} src="../../../images/3@2x.jpg" alt="charity-Testimonial" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
