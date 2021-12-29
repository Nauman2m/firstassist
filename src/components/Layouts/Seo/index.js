import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
 
 function Seo({ description, lang, meta, title }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             siteName
             title
             description
             author
             gSiteVerification
           }
         }
       }
     `
   )
 
   const metaDescription = description || ''
   //const defaultTitle = site.siteMetadata?.title;
   const siteName = site.siteMetadata.siteName
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title || site.siteMetadata?.title}
       // title="Green Light Immigration Canada"
       //titleTemplate={defaultTitle ? `%s` : null}
       meta={[
         {
           name: "referrer",
           content: "no-referrer-when-downgrade",
         },
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           property: `og:site_name`,
           content: `${siteName}`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.author || ``,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
         {
           name: `HandheldFriendly`,
           content: `True`,
         },
         {
           name: `MobileOptimized`,
           content: `320`,
         },
         {
           name: `viewport`,
           content: `width=device-width, initial-scale=1`,
         },
         {
           name: `robots`,
           content: `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`,
         },
         {
           name: `twitter:card`,
           content: `summary_large_image`,
         },
         {
           name: `twitter:label1`,
           content: `Written by`,
         },
         {
           name: `twitter:data1`,
           content: `Danny`,
         }
       ].concat(meta)}
     />
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 export default Seo
 