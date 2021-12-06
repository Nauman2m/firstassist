import useWindowSize from '@charlietango/use-window-size';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from "react";
import RelativeLink from '../../common/RelativeLink';
import * as styles from './NavList.module.scss';

const NavList = ({item}) => {
    const { width } = useWindowSize();
    const mobileScreen = width < 990;
    const { children = [] } = item
    const isExpandable = children && children.length > 0
    const [dropdownOpened, setDropdownOpened] = useState(false);

    let toggleDropdown = useCallback(() => {
      setDropdownOpened(state => !state);
    }, []);

    const MenuItemChildren = (
        <ul className={`${styles.dropdown} ${dropdownOpened ? styles.isOpened : ''}`}>
            {children.map((item, index) => (
              <NavList item={item} key={`sub-nav-${index}`} />
            ))}
        </ul>
    )

    const MenuItemRoot = isExpandable ? (
      <li className={styles.hasDropdown}
      onMouseEnter={!mobileScreen ? toggleDropdown : () => false}
      onMouseLeave={!mobileScreen ? toggleDropdown : () => false}
      >
        <RelativeLink url={item?.url} label={item.label} />
        <FontAwesomeIcon icon={faAngleDown} />
        {MenuItemChildren}
      </li>
    ): (
        <li>
          <RelativeLink url={item?.url} label={item.label} />
        </li>
    )
    
    return (
      <>
        {MenuItemRoot}
      </>
    )
  };

export default NavList;