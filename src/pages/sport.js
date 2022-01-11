import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layouts from '../components/Layouts';
import { ImageBoxGrid, InnerHero, LeftAccordionRightImage, Tabbed } from '../components/modules';

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

const Sport = () => {
  
  const data = useStaticQuery(graphql`
    query {
        HeroBg: file(relativePath: { eq: "sport-first-assist.jpg" }) {
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
        AccordionImage: file(relativePath: { eq: "Implementation.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tabimg1: file(relativePath: { eq: "Creation-Of-Health-Habits.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tabimg2: file(relativePath: { eq: "Positive-Outlet.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tabimg3: file(relativePath: { eq: "Health-Issues-Concerns.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        tabimg4: file(relativePath: { eq: "Partnership-With-Local-Health-Board.jpeg" }) {
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
        img: data?.img3,
    }
  ]

  const tabitems = [
    {
        button: 'Habits',
        title: 'Creation Of Health Habits',
        text: '<p>In the development of all our programs, we consult with the local community to target specific healthy habits the community would like the program to reinforce. These habits are created and reinforced through subliminal and cognizant policies, procedures and tools.</p>',
        img: data?.tabimg1
    },
    {
        button: 'Outlet',
        title: 'Positive Outlet',
        text: '<p>Our sports and learning environment are structured to provide a positive vice for youth to release any negative energy from issues or situations that transpired throughout their day. This message is reiterated to all participants especially when there are momentary behavioral issues from the youth participants.</p>',
        img: data?.tabimg2
    },
    {
        button: 'Concerns',
        title: 'Health Issues Concerns',
        text: '<p>First Assist is cognizant of major health concerns for individuals in the communities we work with. Our program integrations unique to each community that are focused on the mental and physical well-being of our participants. Dependent on the community, youth have to deal a wide variety of health issues: lack of healthy food options, diabetes, drug and alcohol abuse, mental health, emotional support and many others.</p>',
        img: data?.tabimg3
    },
    {
        button: 'Partnership',
        title: 'Partnership With Local Health Board',
        text: '<p>By establishing a partnership with local social workers, nutritionists and health board we can offer each participant health documentation up to four times per programming year. These standardized health protocols can include but are not limited to:</p> <table><thead> <tr> <th>WEIGHT</th> <th>HEIGHT</th> </tr> </thead> <tbody> <tr> <td>BMI</td> <td>Resting Heart Rate</td> </tr> <tr> <td>Waist Circumference</td> <td>Active and Cool Down Heart Rate</td> </tr> <tr> <td>Blood Glucose</td> <td></td> </tr> <tr> <td>Blood Pressure</td> <td></td> </tr> </tbody> </table> <p>First Assist can also include additional health programs depending on the Community Needs Assessment, including but not limited to:</p> <ul> <li>Data analysis based on participant growth and maturation stages</li> <li>Anti-bullying policies and programming, including appropriate uses of social media</li> <li>Nutritional information sessions and meal preparation</li> </ul>',
        img: data?.tabimg4
    },
  ]

  return (
    <Layouts path="/about" title="Sport" description="">
        <InnerHero HeroBg={data.HeroBg} title="Sport" />
        <Tabbed tabitems={tabitems} title={<h2 className="UnderLine"><span>Health</span></h2>} />
        <ImageBoxGrid Items={Items} title="Capacity Building" beforeTitle="Capacity" grid3={true} />
        <LeftAccordionRightImage accordionItem={accordionItem} title="Sport" image={data.AccordionImage} />
    </Layouts>
  )
}

export default Sport
