import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layouts from '../components/Layouts';
import { ConsultForm, ImageBoxGrid, InnerHero, LeftAccordionRightImage, OurApproachTabbed } from '../components/modules';

const CommunityCommitment = () => {
  
  const data = useStaticQuery(graphql`
    query {
        HeroBg: file(relativePath: { eq: "community-first.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img1: file(relativePath: { eq: "multi-stage-programs.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img2: file(relativePath: { eq: "Health.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img3: file(relativePath: { eq: "education-charity.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img4: file(relativePath: { eq: "Community-Needs-Assessment.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img5: file(relativePath: { eq: "Coaching-and-Instructors.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img6: file(relativePath: { eq: "Community-Involvement.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
  `)

  const Items = [
    {
        title: 'Health',
        text: 'First Assist takes proactive measures to help youth in indigenous communities build healthy habits that contribute to productive and meaningful futures.',
        img: data?.img2,
    },
    {
        title: 'Programming',
        text: 'We implement a full season of multi-stage programs that incorporate elements to support and strengthen mental, emotional, and physical well-being.',
        img: data?.img1,
    },
    {
        title: 'Community Needs Assessment',
        text: 'First Assist works with local governing bodies to listen to the community’s areas of concern and develop a community-specific action plan.',
        img: data?.img4,
    },
    {
        title: 'Community Involvement',
        text: 'Local involvement and support are fundamental towards children’s success in both academic and athletic achievements. First Assist makes opportunities to involve community members and provide opportunities for us to work together, so we gain experience for everyone to better serve indigenous communities.',
        img: data?.img6,
    },
    {
        title: 'Coaching and Instructors',
        text: 'We bring suitable staff and train local community members to implement and monitor the development of practice planning and coaching strategies.',
        img: data?.img5,
    },
    {
        title: 'Education',
        text: 'We work alongside local schools to investigate areas of systemic deficiencies in attendance and graduation rates and compare them to national averages and statistics.',
        img: data?.img3,
    },
  ]
  return (
    <Layouts path="/about" title="Community Commitment" description="">
        <InnerHero HeroBg={data.HeroBg} title="Community Commitment" Desc="First Assist operates using a Community Partnership Model that puts indigenous communities in the driver’s seat of their programming. We are truly partners with the indigenous communities we work with. We believe this commitment to community and cultural preservation while prioritizing the needs and desires of each individual community sets us apart and makes us an organization our donors and participants are proud to work with." />
        <OurApproachTabbed />
        <ImageBoxGrid Items={Items} title="Community Needs Identification" beforeTitle="Identification" grid3={true} />
        <LeftAccordionRightImage />
        <ConsultForm />
    </Layouts>
  )
}

export default CommunityCommitment
