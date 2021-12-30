import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layouts from '../components/Layouts';
import { IndigenousPrograms, InnerHero, LeftContentRightImage, MapSection, OurImpact, OurMission, OurVision, TeamMembers } from '../components/modules';

const About = () => {

  const { HeroBg } = useStaticQuery(
    graphql`
    query {
        HeroBg: file(relativePath: { eq: "about-us-firstassist.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `
  );

  return (
    <Layouts path="/about" title="About" description="">
      <InnerHero HeroBg={HeroBg} title="About" />
      <LeftContentRightImage />
      <OurMission />
      <OurVision />
      <OurImpact />
      <IndigenousPrograms />
      <MapSection />
      <TeamMembers />
    </Layouts>
  )
}

export default About
