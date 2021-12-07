import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './index.scss'
import Seo from './Seo'

const Layouts = ({path, children, title, description}) => {
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
