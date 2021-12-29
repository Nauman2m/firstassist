import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import React from 'react';
import Button from '../../common/button';
import * as styles from './OurImpact.module.scss';

const OurImpact = () => {

    const { SectionBg } = useStaticQuery(
        graphql`
        query {
            SectionBg: file(relativePath: { eq: "impact.jpeg" }) {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        `
    );

    return (
        <BgImage className={styles.OurImpact} image={getImage(SectionBg)}>
            <div className={styles.content}>
                <h2 className="UnderLine">Our <span>Impact</span></h2>
                <p>First Assist in an indigenous-led organization. Combined, we have over 40 years of on-site experience implementing indigenous youth programming and development. Our instructors and educators have worked with over 3000 indigenous children and teens since our inception. Throughout this time, we have developed proprietary curriculum, capacity building, and frameworks to promote health and wellness, ensuring each program is fit and tailored to every community's individual needs.</p>
                <p>First Assist programs have proven to reduce student absenteeism and increase attendance in school, resulting in high school graduation rates that are on par with the national average.</p>
                <Button type="link" href="/" text="Join Us Today" />
            </div>
        </BgImage>
    )
}

export default OurImpact
