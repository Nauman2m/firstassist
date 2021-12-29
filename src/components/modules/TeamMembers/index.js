import { StaticImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './TeamMembers.module.scss';

const TeamMembers = () => {
    return (
        <div className={styles.TeamMembers}>
            <div className={styles.wrap}>
                <div className={styles.top}>
                    <h2 className="UnderLine">Team <span>Members</span></h2>
                </div>
                <div className={styles.members}>
                    <div className={styles.member}>
                        <StaticImage className={styles.img} src="../../../images/jhon.jpeg" alt="jhon" />
                        <div className={styles.teamHead}>
                            <h3>John Chabot</h3>
                            <h6>Director</h6>
                        </div>
                        <div className={styles.desc}>
                            <p>John Chabot is an Anishinabeg Algonquin from Kitigan, Zibi First Nation. He spent 19 years playing professional hockey, including 9 in the NHL with the Montreal Canadiens, Pittsburgh Penguins, and Detroit Red Wings. Since 2001, John has spent the majority of his retirement working with indigenous youth in Northern Canada, including indigenous communities in Northwest Territories, Yukon, Ontario, Nunavut, and Nunavik. John has dedicated his time teaching hockey skills at local arenas and visiting schools with the goal of implementing education/sports programs designed to ensure the success of committed students.</p>
                        </div>
                    </div>
                    <div className={styles.member}>
                        <StaticImage className={styles.img} src="../../../images/sean.jpeg" alt="sean" />
                        <div className={styles.teamHead}>
                            <h3>Sean Rudy</h3>
                            <h6>Director Of Education</h6>
                        </div>
                        <div className={styles.desc}>
                            <p>Sean earned an NCAA Division 1 scholarship playing for the Bemidji State University Beavers in Bemidji, Minnesota. Sean completed his English and Education degree at Hobart College in Geneva, New York, and  following graduation, Sean played professional hockey in the ECHL and the SPHL. He is currently in his fourth year working in the Cree Community of Eastmain as the physical education teacher for both the elementary and secondary sectors at Wabannutao Eeyou School. He is the head instructor for Eastmain’s minor hockey and broomball programs. He also leads an innovative sports concentration initiative at W.E.S. The Sports Concentration Program is the first of its kind in the Cree School Board. The main goal of the program is to promote the graduation rate in Eastmain by using sports as a tool to promote attendance and develop engaged student-athletes. Last year Eastmain saw its highest ever graduation rate with a group of its students who were the first cohort to take part in this program.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMembers
