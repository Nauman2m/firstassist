import React, { useState } from 'react';
import Locations from './Locations';
import * as styles from './MapSection.module.scss';
import MapSvg from './MapSvg';

const MapSection = () => {
    const [popupOpened, setPopupOpened] = useState(false);
    const [pin, setPin] = useState(null);

    function TriggerPin(i) {
        setPin(i)
    }

    return (
        <div className={styles.MapSection}>
            <div className={styles.sectionWrap}>
                <h2>Community Partners</h2>
                <div className={styles.mapWrap}>
                    <div className={styles.mapLocWrap}>
                        <div className={styles.mapLocs}>
                            <div className={styles.LocsWrap}>
                                <ul>
                                    {
                                        Locations.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <button onClick={() => TriggerPin(item.id)}>{item.title}</button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mapSvgWrap}>
                        <div className={styles.MapPins}>
                            {
                                Locations.map((item, index) => {
                                    return (
                                        <button key={index} onClick={() => TriggerPin(item.id)} className={`${styles.pin} ${pin === item.id ? styles.active : ''}`} style={{transform: `${item?.pin}`}}>
                                            <img 
                                                width={10} 
                                                height={10} 
                                                src="/images/user-location.svg" 
                                                alt="Pin" 
                                            />
                                        </button>
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
            </div>
        </div>
    )
}

export default MapSection
