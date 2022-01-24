import useWindowSize from '@charlietango/use-window-size';
import { graphql } from 'gatsby';
import React from 'react';

export const fragment = graphql`
  fragment Spacer on WpPage_Pagesections_Sections_Spacer {
    desktop
    fieldGroupName
    mobile
    bgColor
  }
`;

const Spacer = ({desktop, mobile, bgColor}) => {
    const { width } = useWindowSize();
    // {(width > 768 ? <DeskSlider /> : <MobSlider />)}
    const Desk = desktop ?? '60px';
    const Mob = mobile ?? '50px';

    const Height = width > 768 ? Desk : Mob;
    const BG = bgColor ? bgColor : 'transparent'

    return <div style={{height : Height, backgroundColor: BG}} />
}

export default Spacer
