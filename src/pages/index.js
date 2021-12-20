import React from 'react';
import Layouts from '../components/Layouts';
import { CharitableOrganization, CulturalPreservation, HomeHero, ImageBoxGrid, ImageFlex, IndigenousPrograms, LeftImageRightContent, LogoFlex, MapSection, OurAchivements, Testimonial } from '../components/modules';

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
      <CulturalPreservation />
      <ImageFlex />
      <Testimonial />
    </Layouts>
  )
}

export default Page
