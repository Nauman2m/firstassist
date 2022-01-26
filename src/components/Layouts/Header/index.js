import { Link } from 'gatsby';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../common/button';
import * as styles from './header.module.scss';
import NavList from './NavList';
import { useSiteMenuData } from './useSiteMenuData';

const Header = () => {
    const [MobNavBtn, setMobNavBtn] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const menuData = useSiteMenuData();

    const flatListToHierarchical = (
		data = [],
		{ idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
	) => {
		const tree = [];
		const childrenOf = {};
		data.forEach(item => {
			const newItem = { ...item };
			const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
			childrenOf[id] = childrenOf[id] || [];
			newItem[childrenKey] = childrenOf[id];
			parentId
				? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
				: tree.push(newItem);
		});
		return tree;
	};

    const primaryMenu = flatListToHierarchical(menuData?.menuItems?.nodes);

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
                        {primaryMenu.map((item) => {
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
