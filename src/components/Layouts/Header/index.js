import { Link } from 'gatsby';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from 'react';
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
        "url": "https://firstassist.ca/community-commitment/",
        "parentId": null,
        "__typename": "MenuItem",
        "children": []
    },
    {
        "id": "cG9zdDozODg=",
        "label": "Sport",
        "url": "https://firstassist.ca/sport/",
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
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);

    const toggleMobBtn = () => {
        setMobNavBtn(state => !state);
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(headerRef.current, 
            {
                duration: 4,
                ease: "power1.in",
                yoyo: true,
                scrollTrigger: {
                  trigger: headerRef.current,
                  start: '500px top',
                  onEnter: () => setIsSticky(true),
                  onLeaveBack: () => setIsSticky(false),
                  toggleActions: 'play none none reverse',
                  markers: false
                }
            }
        );
    }, []);

    return (
        <header ref={headerRef} className={`${styles.headerContainer} ${isSticky ? styles.isSticky : ''}`}>
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
                    <Button type="link" href="https://www.paypal.com/donate/?hosted_button_id=AYUHKTL24RHZU" target="_blank" text="Donate Now" />
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
