import { graphql } from "gatsby";
import React from 'react';
import Layouts from '../components/Layouts';
import { CharitableOrganization, ConsultForm, CulturalPreservation, HomeHero, ImageBox, ImageBoxGrid, ImageContentFlex, ImageFlex, IndigenousPrograms, InnerHero, LeftAccordionRightImage, LeftContentRightImage, LeftImageRightContent, ListContent, LogoFlex, MapSection, OurAchivements, OurImpact, OurMission, OurVision, SliderTopContentBottomImage, Spacer, Tabbed, TeamMembers, Testimonial } from '../components/modules';

const Page = ({data}) => {
  const { seo } = data.wpPage
  const sections = data.wpPage.pagesections.sections;
    
  console.log(data)
  return (
    <Layouts title="Home" description="" seo={seo}>
      {sections?.map((section, index) => {
          const typeName = section.fieldGroupName;
          
          switch (typeName) {
            case 'Page_Pagesections_Sections_HomeHero':
              return <HomeHero key={index} {...section} />;

            case 'Page_Pagesections_Sections_Spacer':
              return <Spacer key={index} {...section} />;

            case 'Page_Pagesections_Sections_LogoFlex':
              return <LogoFlex key={index} {...section} />;

            case 'Page_Pagesections_Sections_LeftImageRightContent':
              return <LeftImageRightContent key={index} {...section} />;

            case 'Page_Pagesections_Sections_OurAchivements':
              return <OurAchivements key={index} {...section} />;

            case 'Page_Pagesections_Sections_CharitableOrganization':
              return <CharitableOrganization key={index} {...section} />;

            case 'Page_Pagesections_Sections_IndigenousPrograms':
              return <IndigenousPrograms key={index} {...section} />;

            case 'Page_Pagesections_Sections_MapSection':
              return <MapSection key={index} {...section} />;

            case 'Page_Pagesections_Sections_CulturalPreservation':
              return <CulturalPreservation key={index} {...section} />;

            case 'Page_Pagesections_Sections_ImageFlex':
              return <ImageFlex key={index} {...section} />;

            case 'Page_Pagesections_Sections_Testimonial':
              return <Testimonial key={index} {...section} />;

            case 'Page_Pagesections_Sections_InnerHero':
              return <InnerHero key={index} {...section} />;

            case 'Page_Pagesections_Sections_LeftContentRightImage':
              return <LeftContentRightImage key={index} {...section} />;

            case 'Page_Pagesections_Sections_OurMission':
              return <OurMission key={index} {...section} />;

            case 'Page_Pagesections_Sections_OurVision':
              return <OurVision key={index} {...section} />;

            case 'Page_Pagesections_Sections_OurImpact':
              return <OurImpact key={index} {...section} />;

            case 'Page_Pagesections_Sections_TeamMembers':
              return <TeamMembers key={index} {...section} />;

            case 'Page_Pagesections_Sections_Tabbed':
              return <Tabbed key={index} {...section} />;

            case 'Page_Pagesections_Sections_ImageBoxGrid':
              return <ImageBoxGrid key={index} {...section} />;

            case 'Page_Pagesections_Sections_LeftAccordionRightImage':
              return <LeftAccordionRightImage key={index} {...section} />;

            case 'Page_Pagesections_Sections_ConsultForm':
              return <ConsultForm key={index} {...section} />;

            case 'Page_Pagesections_Sections_ImageContentFlex':
              return <ImageContentFlex key={index} {...section} />;

            case 'Page_Pagesections_Sections_SliderTopContentBottomImage':
              return <SliderTopContentBottomImage key={index} {...section} />;

            case 'Page_Pagesections_Sections_ListContent':
              return <ListContent key={index} {...section} />;

            case 'Page_Pagesections_Sections_ImageBox':
              return <ImageBox key={index} {...section} />;
            
            default:
              return null;
          }
      })}

    </Layouts>
  )
}


export const query = graphql`
  query getPageData($id: String) {
    wpPage(id: { eq: $id }) {
      title
      uri
      slug
      seo {
        ...SeoFragment
      }
      pagesections {
        sections {
          ...HomeHero
          ...Spacer
          ...LogoFlex
          ...LeftImageRightContent
          ...OurAchivements
          ...CharitableOrganization
          ...IndigenousPrograms
          ...MapSection
          ...CulturalPreservation
          ...ImageFlex
          ...Testimonial
          ...InnerHero
          ...LeftContentRightImage
          ...OurMission
          ...OurVision
          ...OurImpact
          ...TeamMembers
          ...Tabbed
          ...ImageBoxGrid
          ...LeftAccordionRightImage
          ...ConsultForm
          ...ImageContentFlex
          ...SliderTopContentBottomImage
          ...ListContent
          ...ImageBox
        }
      }
    }
  }
`

export default Page