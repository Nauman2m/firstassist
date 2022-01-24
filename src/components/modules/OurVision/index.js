import { graphql } from 'gatsby';
import React from 'react';
import * as styles from './OurVision.module.scss';

export const fragment = graphql`
  fragment OurVision on WpPage_Pagesections_Sections_OurVision {
    content
    fieldGroupName
  }
`;

const OurVision = () => {
    return (
        <div className={styles.OurVision}>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <h2 className="UnderLine">Our <span>Vision</span></h2>
                    <p>At First Assist, we believe every child should have access to an excellent education and be freely given every opportunity and tool needed to graduate high school. When working in partnership with local sports programs that share a common goal, we are convinced every student in every indigenous community in Canada can have that chance.</p>
                </div>
            </div>
        </div>
    )
}

export default OurVision
