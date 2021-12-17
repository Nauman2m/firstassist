import React from 'react';
import Layouts from '../components/Layouts';
import { HomeHero, ImageBoxGrid, LeftImageRightContent, LogoFlex, MapSection, OurAchivements } from '../components/modules';

const Page = () => {
  return (
    <Layouts path="/" title="Home" description="">
      <HomeHero />
      <LogoFlex />
      <LeftImageRightContent />
      <OurAchivements />
      <ImageBoxGrid />
      <MapSection />
    </Layouts>
  )
}

export default Page
