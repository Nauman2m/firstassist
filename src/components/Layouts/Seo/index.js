import React from 'react';
import Helmet from 'react-helmet';

function decodeHTML(html) {
    if (!html) return null;
    html = html.replace('amp;', '');
    return html.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
}
 
const Seo = ({ slug = "", isBlog = false, metaDesc = "", opengraphImage = null, opengraphTitle = "", title = "", twitterDescription = "", twitterImage = null, twitterTitle = "" }) => {

    const postURL = `/`;

    const schemaOrgJSONLD = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url: process.env.GATSBY_SITE_URL,
            name: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
            alternateName: '@firstassist',
        },
        {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                        '@id': postURL,
                        name: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
                        image: opengraphImage ? opengraphImage.sourceUrl : null,
                    },
                },
            ],
        },
        {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            url: process.env.GATSBY_SITE_URL,
            name: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
            alternateName: '@firstassist',
            headline: opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title),
            image: {
                '@type': 'ImageObject',
                url: opengraphImage ? opengraphImage.sourceUrl : null,
            },
            description: metaDesc,
        },
    ];

    return (
        <Helmet   htmlAttributes={{ lang: 'en', }}>
            {/* General tags */}
            <title>{opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title)}</title>
            <meta name="description" content={metaDesc} />
            <meta name="image" content={opengraphImage ? opengraphImage.sourceUrl : null} />

            {/* Schema.org tags */}
            <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

            {/* OpenGraph tags */}
            <meta property="og:url" content={`${process.env.GATSBY_SITE_URL}/${slug}`} />
            {isBlog ? <meta property="og:type" content="article" /> : null}
            <meta
                property="og:title"
                content={opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title)}
            />
            <meta property="og:description" content={metaDesc || ''} />
            <meta property="og:image" content={opengraphImage ? opengraphImage.sourceUrl : null} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`${process.env.GATSBY_SITE_URL}/${slug}`} />
            <meta name="twitter:creator" content="whatjackhasmade" />
            <meta
                name="twitter:title"
                content={
                    twitterTitle ||
                    (opengraphTitle ? decodeHTML(opengraphTitle) : decodeHTML(title))
                }
            />
            <meta name="twitter:description" content={twitterDescription || metaDesc || ''} />
            <meta
                name="twitter:image"
                content={
                    twitterImage
                        ? twitterImage.sourceUrl
                        : opengraphImage
                        ? opengraphImage.sourceUrl
                        : null
                }
            />
        </Helmet>
    );
};

export default Seo;
