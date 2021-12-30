import useWindowSize from '@charlietango/use-window-size';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import RelativeLink from '../../common/RelativeLink';
import * as styles from './NavList.module.scss';

const NavList = ({item}) => {
    const { width } = useWindowSize();
    const mobileScreen = width < 768;
    const { children = [] } = item
    const isExpandable = children && children.length > 0
    const [dropdownOpened, setDropdownOpened] = useState(false);

    let toggleDropdown = () => {
      setDropdownOpened(state => !state);
    };

    let DropdownTrue = () => {
      setDropdownOpened(true);
    };

    let DropdownFalse = () => {
      setDropdownOpened(false);
    };

    const MenuItemChildren = (
        <ul className={`${styles.dropdown} ${dropdownOpened ? styles.isOpened : ''}`}>
            {children.map((item, index) => (
              <NavList item={item} key={item.id} />
            ))}
        </ul>
    )

    const MenuItemRoot = isExpandable ? (
      <li className={styles.hasDropdown}
      onMouseEnter={!mobileScreen ? DropdownTrue : () => false}
      onMouseLeave={!mobileScreen ? DropdownFalse : () => false}
      >
        <RelativeLink url={item?.url} label={item.label} />
        <button onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
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