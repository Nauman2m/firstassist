import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layouts from '../components/Layouts';
import { ConsultForm, ImageBoxGrid, InnerHero, LeftAccordionRightImage, Tabbed } from '../components/modules';

const accordionItem = [
    {
        title: 'Proactive Opposed To Reactive',
        text: 'First Assist proactively addresses long-term education and health issues by promoting healthy habits for life. Our goal is to have all participants graduate from secondary school. We provide coping tools, goal setting exercises, and positive reinforcement to encourage and lead our participants to that end.'
    },
    {
        title: 'Quality & Qualified Teachers & Coaches',
        text: 'Our teachers  and coaches must have a history of being great role models within their own communities and exemplify the “3 Cs of Our Internal Culture: Compassionate, Considerate and Communicative.” All teachers have qualifications in their respective provinces. All coaches have qualifications in their respective sports. Most of all, all staff are proven role models and actively engage youth and community in their personal lives. We believe our organization is only as strong as each of our team members.'
    },
    {
        title: 'Engagement Of Youth And Community',
        text: 'We believe the success of youth is directly related to the involvement of the community. We partner with community members and encourage community involvement in our programs so the entire community can benefit and take responsibility for the success of our programs. Every person that takes part in our program can benefit from it, so the entire community has the opportunity to become healthier and develop lifelong skills.'
    },
    {
        title: 'Empowerment Through Leadership',
        text: 'Leadership training workshops and curriculum development allow local interns to develop the skills to engage and monitor local participants. The end goal is self-sufficient programming; we want to be able to leave a community and allow local leaders to continue to run our program with equal levels of success.'
    },
    {
        title: 'Skills Transfer',
        text: 'We want to provide community members with skills and strategies to teach and coach in their respective sport, so communities can continue to grow and establish sports programs in their towns.'
    },
    {
        title: 'Quality Tools & Process',
        text: 'We have built a number of different tools to enhance our program and integrative processes. We’ve developed an app and use technology tools to help participants adapt to new learning methodology pertinent to engaging youth. We continuously reinforce a positive learning environment and use tools to track individual and group progress.'
    },
    {
        title: 'Feedback & Reiteration',
        text: 'Throughout all program stages, we gather feedback, actively and passively to learn, and adapt the program to fit community needs. We generate monthly reports and host local meetings to be sure we’re meeting and exceeding the community&apos;s expectations.'
    },
]

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
        AccordionImage: file(relativePath: { eq: "Implementation.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tabimg1: file(relativePath: { eq: "community.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tabimg2: file(relativePath: { eq: "Holistic-Approach.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tabimg3: file(relativePath: { eq: "Cultural-Preservation.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tabimg4: file(relativePath: { eq: "Results-Based-And-Results-Driven.jpg" }) {
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
  const tabitems = [
    {
        button: 'Collaborative',
        title: 'Collaborative & Consultative',
        text: '<p>First Assist uses a collaborative approach. We implement our programs based on each Community’s Needs Analysis. We consult with multiple local community members and entities to identify issues impacting the community. Then, we invite community members to work in partnership with our instructors to further support and encourage youth to reach their goals in both school and sport.</p>',
        img: data?.tabimg1
    },
    {
        button: 'Holistic',
        title: 'Holistic Approach',
        text: '<p>Our programming introduces a 360-degree, holistic approach to improving student outcomes. Our four pillars are Education, Health, Capacity Building, and Sport. Each pillar is delivered in a set sequence depending on the Community Needs Assessment.</p>',
        img: data?.tabimg2
    },
    {
        button: 'Cultural',
        title: 'Cultural Preservation',
        text: '<p>Cultural Preservation is at the forefront of our approach. We ensure the main messages of our program are delivered through the local dialect by using local mentors. We consult with local Elders & cultural departments to implement collaborative programs that honour the local heritage and integrate cultural components wherever possible.</p>',
        img: data?.tabimg3
    },
    {
        button: 'Results',
        title: 'Results-Based And Results-Driven',
        text: '<p>Above all else, First Assist programs are results-based and results-driven. We create measurable goals and implement statistical monitoring to ensure the proper implementation of our programs and the development of our participants.</p>',
        img: data?.tabimg4
    },
  ]

  return (
    <Layouts path="/about" title="Community Commitment" description="">
        <InnerHero HeroBg={data.HeroBg} title="Community Commitment" Desc="First Assist operates using a Community Partnership Model that puts indigenous communities in the driver’s seat of their programming. We are truly partners with the indigenous communities we work with. We believe this commitment to community and cultural preservation while prioritizing the needs and desires of each individual community sets us apart and makes us an organization our donors and participants are proud to work with." />
        <Tabbed tabitems={tabitems} title={<h2 className="UnderLine">Our <span>Approach</span></h2>} />
        <ImageBoxGrid Items={Items} title="Community Needs Identification" beforeTitle="Identification" grid3={true} />
        <LeftAccordionRightImage accordionItem={accordionItem} title="Implementation" image={data.AccordionImage} />
        <ConsultForm />
    </Layouts>
  )
}

export default CommunityCommitment
