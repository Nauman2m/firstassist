import React from 'react';
import Layouts from '../components/Layouts';
import { InnerHero, LeftContentRightImage, MapSection, OurImpact, OurMission, OurVision, TeamMembers } from '../components/modules';

const About = () => {
  return (
    <Layouts path="/about" title="About" description="">
      <InnerHero />
      <LeftContentRightImage />
      <OurMission />
      <OurVision />
      <OurImpact />
      <MapSection />
      <TeamMembers />
    </Layouts>
  )
}

export default About
