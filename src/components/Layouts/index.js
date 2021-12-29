import { gsap, TweenLite } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import React, { useEffect } from 'react'
import '../../styles/index.scss'
import Footer from './Footer'
import Header from './Header'
import Seo from './Seo'

const Layouts = ({path, children, title, description}) => {
    
    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin);
        TweenLite.to( CSSRulePlugin.getRule(".UnderLine span::before"), 1, {cssRule:{width: "100%"}});
    }, [])

    return (
        <>
            <Seo title={title} description={description} />
            <main>
            <Header path={path} />
                {children}
            <Footer />
            </main>
        </>
    )
}

export default Layouts
