import { Link } from 'gatsby'
import React from 'react'

const RelativeLink = ({url, label, cssClasses = '', ...props}) => {
    if (!url) return undefined
  
    let WPURL = process.env.GATSBY_SITE_ADMIN_URL
    let string = url
  
    if (string.startsWith(`/`)) return <Link className={cssClasses} to={string} {...props}>{label}</Link>
  
    if (string.match(WPURL)) {
      string = string.replace(WPURL, "")
      return <Link className={cssClasses} to={string} {...props}>{label}</Link>
    }
    return <a className={cssClasses} href={string} {...props}>{label}</a>
}

export default RelativeLink
