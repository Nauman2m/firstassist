import { Link } from 'gatsby';
import React from 'react';
import Button from '../../common/button';
import * as styles from './header.module.scss';
import NavList from './NavList';

let Menu = [
    {
        "id": "cG9zdDozODQ=",
        "label": "Home",
        "url": "https://firstassist.ca/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    },
    {
        "id": "cG9zdDozODU=",
        "label": "Virtual",
        "url": "https://firstassist.ca/about/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    },
    {
        "id": "cG9zdDozODY=",
        "label": "About",
        "url": "https://firstassist.ca/services/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": [
            {
                "id": "cG9zdDo0MDE=",
                "label": "What We Do",
                "url": "/",
                "parentId": "cG9zdDozODY=",
                "__typename": "MenuItem",
                "children": []
            },
            {
                "id": "cG9zdDo0MDI=",
                "label": "Our Mission",
                "url": "/",
                "parentId": "cG9zdDozODY=",
                "__typename": "MenuItem",
                "children": []
            }
        ]
    },
    {
        "id": "cG9zdDozODc=",
        "label": "Community Commitment",
        "url": "https://firstassist.ca/case-studies/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    },
    {
        "id": "cG9zdDozODg=",
        "label": "Programs",
        "url": "https://firstassist.ca/contact/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    },
    {
        "id": "cG9zdDozOD1=",
        "label": "Join Us",
        "url": "https://firstassist.ca/contact/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    }
]

const Header = ({path}) => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Link aria-label="logo" to="/">
                        <img width={230} height={37} src="/images/first-assist-logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className={styles.navContainer}>
                    <ul>
                        {Menu.map((item) => {
                            return (
                                <NavList item={item} key={item.id} />
                            );
                        })}
                    </ul>
                </div>
                <div className={styles.btnContainer}>
                    <Button type="link" href="#" target="_blank" text="Donate Now" />
                </div>
            </div>
        </header>
    )
}

export default Header
