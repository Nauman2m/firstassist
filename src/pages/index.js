import React from 'react';
import Layouts from '../components/Layouts';
import { HomeHero, LogoFlex } from '../components/modules';

const Page = () => {
  return (
    <Layouts path="/" title="Home" description="">
      <HomeHero />
      <LogoFlex />
    </Layouts>
  )
}

export default Page
