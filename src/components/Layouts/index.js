import React from 'react'
import '../../styles/index.scss'
import Footer from './Footer'
import Header from './Header'
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
