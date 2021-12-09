import React from 'react';
import Layouts from '../components/Layouts';
import { HomeHero, ImageBoxGrid, LeftThreeParallaxImageRightContent, LogoFlex, OurAchivements } from '../components/modules';

const Page = () => {
  return (
    <Layouts path="/" title="Home" description="">
      <HomeHero />
      <LogoFlex />
      <LeftThreeParallaxImageRightContent />
      <OurAchivements />
      <ImageBoxGrid />
    </Layouts>
  )
}

export default Page
