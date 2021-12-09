import React from 'react';
import Layouts from '../components/Layouts';
import { HomeHero, LeftThreeParallaxImageRightContent, LogoFlex, OurAchivements } from '../components/modules';

const Page = () => {
  return (
    <Layouts path="/" title="Home" description="">
      <HomeHero />
      <LogoFlex />
      <LeftThreeParallaxImageRightContent />
      <OurAchivements />
    </Layouts>
  )
}

export default Page
