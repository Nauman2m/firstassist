import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './ImageBox.module.scss';


const ImageBox = () => {

    const data = useStaticQuery(graphql`
        query {
            img1: file(relativePath: { eq: "English-Language-Arts.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            img2: file(relativePath: { eq: "Mathematics.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            img3: file(relativePath: { eq: "Science.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)
    const Items = [
        {
            title: 'English Language Arts',
            img: data?.img1,
        },
        {
            title: 'Mathematics',
            img: data?.img2,
        },
        {
            title: 'Science',
            img: data?.img3,
        },
    ]
    return (
        <div className={styles.ImageBox}>
            <div className={styles.wrap}>
                {
                    Items.map((item, index) => {
                        return(
                            <div key={index} className={styles.itemWrap}>
                                <GatsbyImage className={styles.img} image={getImage(item.img)} alt="" />
                                <div className={styles.title}>
                                    <h3>{item.title}</h3>
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" class="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageBox
