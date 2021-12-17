import React from 'react';
import Layouts from '../components/Layouts';
import { CharitableOrganization, HomeHero, ImageBoxGrid, IndigenousPrograms, LeftImageRightContent, LogoFlex, MapSection, OurAchivements } from '../components/modules';

const Page = () => {
  return (
    <Layouts path="/" title="Home" description="">
      <HomeHero />
      <LogoFlex />
      <LeftImageRightContent />
      <OurAchivements />
      <ImageBoxGrid />
      <CharitableOrganization />
      <IndigenousPrograms />
      <MapSection />
    </Layouts>
  )
}

export default Page
