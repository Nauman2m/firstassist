import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import Layouts from '../components/Layouts';
import { CharitableOrganization, CulturalPreservation, HomeHero, ImageBoxGrid, ImageFlex, IndigenousPrograms, LeftImageRightContent, LogoFlex, MapSection, OurAchivements, Testimonial } from '../components/modules';

const Page = () => {
  const data = useStaticQuery(graphql`
    query {
        img1: file(relativePath: { eq: "education-charity.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img2: file(relativePath: { eq: "health-charity.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img3: file(relativePath: { eq: "capacity-building.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img4: file(relativePath: { eq: "sports.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
  `)

  const Items = [
    {
        title: 'HEALTH',
        text: 'Through sports education and programming, we emphasize the critical need for prioritizing health and wellness - both physically and mentally.',
        img: data?.img2,
    },
    {
        title: 'EDUCATION',
        text: 'Providing programming that enhances the indigenous education experience is a critical outcome and success indicator of our charitable organization.',
        img: data?.img1,
    },
    {
        title: 'SPORT',
        text: 'We aim to improve the athletic abilities of participants and mentors, offering skill development in athletics and coaching/instruction.',
        img: data?.img4,
    },
    {
        title: 'CAPACITY BUILDING',
        text: 'Our community partnerships and programming strengthen the skills and abilities of indigenous communities by providing opportunities to share knowledge and experience, thus amplifying the likelihood of youth to thrive in any circumstance.',
        img: data?.img3,
    },
  ]
  return (
    <Layouts path="/" title="Home" description="">
      <HomeHero />
      <LogoFlex />
      <LeftImageRightContent />
      <OurAchivements />
      <ImageBoxGrid Items={Items} title="Four Pillars of Programming" BeforeTitle="What We Do" />
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
