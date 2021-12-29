import { Link } from 'gatsby';
import React, { useState } from 'react';
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
        "url": "https://firstassist.ca/virtual/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    },
    {
        "id": "cG9zdDozODY=",
        "label": "About",
        "url": "https://firstassist.ca/about/",
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
        "url": "https://firstassist.ca/Community-commitment/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    },
    {
        "id": "cG9zdDozODg=",
        "label": "Programs",
        "url": "https://firstassist.ca/programs/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    },
    {
        "id": "cG9zdDozOD1=",
        "label": "Join Us",
        "url": "https://firstassist.ca/join-us/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    }
]

const Header = ({path}) => {
    const [MobNavBtn, setMobNavBtn] = useState(false);

    const toggleMobBtn = () => {
        setMobNavBtn(state => !state);
    }

    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Link aria-label="logo" to="/">
                        <img width={230} height={37} src="/images/first-assist-logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className={`${styles.navContainer} ${MobNavBtn ? styles.active : ''}`}>
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
                <div className={styles.MobNavBtn}>
                    <button onClick={toggleMobBtn}>
                        <span className={`${styles.bars} ${MobNavBtn ? styles.active : ''}`}>
                            <span className={styles.barsInner}>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
