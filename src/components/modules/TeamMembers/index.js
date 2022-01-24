import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './TeamMembers.module.scss';

export const fragment = graphql`
  fragment TeamMembers on WpPage_Pagesections_Sections_TeamMembers {
    fieldGroupName
    title
    members {
      name
      designation
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

const TeamMembers = (props) => {
    const {
        title,
        members
    } = props

    return (
        <div className={styles.TeamMembers}>
            <div className={styles.wrap}>
                <div className={styles.top} dangerouslySetInnerHTML={{__html: title}} />
                <div className={styles.members}>
                    {
                        members?.map((item, index) => {
                            return(
                                <div key={index} className={styles.member}>
                                    <GatsbyImage className={styles.img} image={getImage(item?.image?.localFile)} alt={item?.image?.altText} />
                                    <div className={styles.teamHead}>
                                        <h3>{item?.name}</h3>
                                        <h6>{item?.designation}</h6>
                                    </div>
                                    <div className={styles.desc} dangerouslySetInnerHTML={{__html: item?.text}} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamMembers
