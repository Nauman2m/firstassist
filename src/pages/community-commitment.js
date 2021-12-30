import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layouts from '../components/Layouts';
import { InnerHero, OurApproachTabbed } from '../components/modules';

const CommunityCommitment = () => {
      
  const { HeroBg } = useStaticQuery(
    graphql`
    query {
        HeroBg: file(relativePath: { eq: "community-first.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `
  );

  return (
    <Layouts path="/about" title="Community Commitment" description="">
      <InnerHero HeroBg={HeroBg} title="Community Commitment" Desc="First Assist operates using a Community Partnership Model that puts indigenous communities in the driver’s seat of their programming. We are truly partners with the indigenous communities we work with. We believe this commitment to community and cultural preservation while prioritizing the needs and desires of each individual community sets us apart and makes us an organization our donors and participants are proud to work with." />
    <OurApproachTabbed />
    </Layouts>
  )
}

export default CommunityCommitment
