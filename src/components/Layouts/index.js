import { graphql } from "gatsby"
import { gsap, TweenLite } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import React, { useEffect } from 'react'
import '../../styles/index.scss'
import Footer from './Footer'
import Header from './Header'
import Seo from './Seo'

const Layouts = ({children, seo}) => {
    
    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin);
        TweenLite.to( CSSRulePlugin.getRule(".UnderLine span::before"), 1, {cssRule:{width: "100%"}});
    }, [])

    return (
        <>
            <Seo {...seo} />
            <main>
            <Header />
                {children}
            <Footer />
            </main>
        </>
    )
}

export default Layouts

export const query = graphql`
    fragment SeoFragment on WpPostTypeSEO {
        breadcrumbs {
        text
        url
        }
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphAuthor
        opengraphDescription
        opengraphTitle
        schema {
        articleType
        pageType
        raw
        }
        opengraphImage {
        sourceUrl
        }
        opengraphSiteName
        opengraphPublishedTime
        opengraphModifiedTime
        twitterTitle
        twitterDescription
        twitterImage {
        sourceUrl
        }
    }
`