import useWindowSize from '@charlietango/use-window-size';
import { graphql } from 'gatsby';
import React, { useCallback, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Button from '../../common/button';
import Locations from './Locations';
import * as styles from './MapSection.module.scss';
import MapSvg from './MapSvg';

export const fragment = graphql`
  fragment MapSection on WpPage_Pagesections_Sections_MapSection {
    fieldGroupName
    title
  }
`;

const MapSection = ({title}) => {
    const {width} = useWindowSize();
    let mobileScreen = width < 768;
    const [pin, setPin] = useState(null);
    const [ListScroll, setListScroll] = useState(false);
    const [pinHovered, setPinHovered] = useState(false);

    let TriggerListScroll = useCallback(() => {
        setListScroll(state => !state);
    }, []);

    let TriggerHovered = useCallback(() => {
        setPinHovered(state => !state);
    }, []);

    function TriggerPin(i) {
        setPin(i)
    }

    return (
        <div className={styles.MapSection}>
            <div className={styles.sectionWrap}>
                <div dangerouslySetInnerHTML={{__html: title}} />
                <div className={styles.mapWrap}>
                    <div className={styles.mapLocWrap}>
                        <div className={styles.mapLocs}>
                            <SimpleBar 
                                className={`${styles.LocsWrap} ${ListScroll ? styles.customScrollBar : ''}`}
                                onMouseEnter={!mobileScreen ? TriggerListScroll : () => false}
                                onMouseLeave={!mobileScreen ? TriggerListScroll : () => false}  
                            >
                                <ul>
                                    {
                                        Locations.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <button 
                                                        onClick={() => TriggerPin(item.id)}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </SimpleBar>
                        </div>
                    </div>
                    <div className={styles.mapSvgWrap}>
                        <div className={`${styles.MapPins} ${pinHovered || pin !== null ? styles.activeMapPins : ''}`}>
                            {
                                Locations.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className={`${styles.info2} ${pin === item.id ? styles.active : ''}`}  style={{transform: `translate(calc(${item.x} - 45%), calc(${item.y} - 108%))`}}>
                                                <div className={styles.head}>
                                                    <button onClick={() => setPin(null)}></button>
                                                </div>
                                                <div className={styles.content}>
                                                    <h5>{item?.title}</h5>
                                                    <p>Population: {item?.population}<br />
                                                        Youth Participants: {item?.participants}<br/>
                                                        Program: {item?.program}<br/>
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => TriggerPin(item.id)}
                                                onMouseEnter={!mobileScreen ? TriggerHovered : () => false}
                                                onMouseLeave={!mobileScreen ? TriggerHovered : () => false}
                                                className={`${styles.pin} ${pin === item.id ? styles.active : ''}`} 
                                                style={{transform: `${!mobileScreen ? item?.pin : item?.pinM}`}}
                                            >
                                                <img width={10} height={10} src="/images/user-location.svg" alt="Pin" />
                                            </button>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.mapCont}>
                            <MapSvg />
                        </div>
                        <div className={`${styles.LocInfo} ${pin !== null ? styles.activeInfo : ''}`}>
                            <div className={styles.info}>
                                <div className={styles.head}>
                                    <button onClick={() => setPin(null)}></button>
                                </div>
                                <div className={styles.content}>
                                    <h5>{Locations[pin]?.title}</h5>
                                    <p>Population: {Locations[pin]?.population}<br />
                                        Youth Participants: {Locations[pin]?.participants}<br/>
                                        Program: {Locations[pin]?.program}<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Cta}>
                    <Button type="link" internal={true} href="/join-us/" text="Learn About Virtual Experiences" />
                </div>
            </div>
        </div>
    )
}

export default MapSection
