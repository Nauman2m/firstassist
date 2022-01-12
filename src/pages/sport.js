import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layouts from '../components/Layouts';
import { ImageBox, ImageBoxGrid, ImageContentFlex, InnerHero, LeftAccordionRightImage, ListContent, SliderTopContentBottomImage, Tabbed } from '../components/modules';

const accordionItem = [
    {
        title: 'Structured And Unstructured Play Focused On The Development Of Healthy Habits',
        text: '<p>Participation in sports and activities help develop habits, and First Assist programming helps participants continually shape and develop positive habits. We integrate policies, procedures, and tools that are directly aimed at establishing new and consistent behavioral responses the community has identified as lacking.</p>'
    },
    {
        title: 'Development Based On The Indigenous LTPDP',
        text: '<p>First Assist programs are based on the indigenous Long-Term Participant Development Pathway.Sport for Life defines the indigenous LTPDP as a “roadmap for developing sport and physical activity among indigenous peoples,” and is a “reference for those who work with indigenous participants in sport and recreation.” It has grown out of the understanding that mainstream models for sport development do not necessarily align with indigenous needs or experiences.</p> <p>As such, this document tries to address that gap by “outlining the key elements that need to be considered when planning, developing, and implementing programs for and with indigenous peoples and communities.”</p> <p>For more information please visit: <a href="https://sportforlife.ca/portfolio-view/indigenous-long-term-participant-development-pathway">https://sportforlife.ca/portfolio-view/indigenous-long-term-participant-development-pathway</a></p>'
    },
    {
        title: 'Multi-Stage Development Plan',
        text: '<p>First Assist uses a Multi-Stage Development Plan. This development plan uses sport-specific programming based on age-appropriate skills implementation. Our certified instructors provide skill checklists and manuals that are delivered to a community based on 6-week, 12-week, 24-week, 32-week, and full school year progressions.</p>'
    },
    {
        title: 'Certified And Qualified Instructors',
        text: '<p>All First Assist staff have qualifications in their respective sports, are CPR & First Aid certified, and have completed the Aboriginal Coaching Modules. Most importantly they are people of quality character who engage with the local community to embrace our active lifestyle and education first initiative.</p>'
    }
]

const Sport = () => {
  
  const data = useStaticQuery(graphql`
    query {
        HeroBg: file(relativePath: { eq: "sport-first-assist.jpg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img1: file(relativePath: { eq: "Local-Staff.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img2: file(relativePath: { eq: "Seasonal-Planning.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        img3: file(relativePath: { eq: "Youth-Leadership.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        AccordionImage: file(relativePath: { eq: "first-assist-sport.jpeg" }) {
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
        selfSustainable: file(relativePath: { eq: "Self-Sustainable-Programming.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        YouthWorkshops: file(relativePath: { eq: "Youth-Workshops.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
  `)

  const Items = [
    {
        title: 'Youth Leadership',
        text: 'We identify leaders both in sport and in school. These youth serve as mentors for younger players as they help and learn from the First Assist instructors.',
        img: data?.img3,
    },
    {
        title: 'Local Staff',
        text: 'We work with local coaches and instructors both on and off the playing field to develop age-appropriate skills and strategies. Confidence and self-esteem building, as well as leadership skills development, are vital components of First Assist programming.',
        img: data?.img1,
    },
    {
        title: 'Seasonal Planning',
        text: 'We provide sport-specific programming manuals for progression-based learning and multi-stage development. We engage local participants through structured full season practice plans that are easily downloaded and run with our App.',
        img: data?.img2,
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

        <ImageContentFlex title={<h2 className="UnderLine">Self-Sustainable <span style={{display: 'inline-block'}}>Programming</span></h2>} content="First Assist works with youth and community members in order to establish local capacity for training and programming methods. The end goal is self-sustainable programming through our coaching and instructor mentorship program. Our team members pass on their knowledge and skill sets to members of the community, empowering them to become instructors and coaches to their own local youth for years to come." image={data.selfSustainable} reverce={true} />

        <ImageContentFlex title={<h2 className="UnderLine">Youth <span>Workshops</span></h2>} content="We host weekly workshops that focus on a specific life skill deemed pertinent by the local community in the Needs Assessment. Workshop topics include: positive reinforcement techniques, use of body language, learning styles, engagement & communication techniques, active listening and learning, leadership, team-building, uses of social media, sleep needs, and more. We have a wide library of resources from years of community involvement, and the resource base continues to grow with each community we work within." image={data.YouthWorkshops} />
        
        <SliderTopContentBottomImage />

        <ListContent />

        <ImageBox />

        <LeftAccordionRightImage accordionItem={accordionItem} title="Sport" image={data.AccordionImage} accordionWidth60={true} />
    </Layouts>
  )
}

export default Sport
