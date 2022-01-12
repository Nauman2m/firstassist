import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './ListContent.module.scss';

const ListContent = () => {
    return (
        <div className={styles.ListContent}>
            <div className={styles.wrap}>
                <BeforeHeadingText text="Education" />
                <h2>Local Collaboration</h2>
                <p>Local collaboration between our team and the school is essential to the students’ and our programs successful outcomes. Working with the local school body we ensure all program participants are actively engaged in school. How this is accomplished varies based on the individual needs of each school and its members.</p>
                <ul>
                    <li><FontAwesomeIcon icon={faDotCircle} /> Statistical monitoring of improvement in school attendance and grades</li>
                    <li><FontAwesomeIcon icon={faDotCircle} /> READ Program for participation in sports within school hours (Respect-Effort-Attendance-Discipline)</li>
                    <li><FontAwesomeIcon icon={faDotCircle} /> Monitoring of students’ engagement in class</li>
                    <li><FontAwesomeIcon icon={faDotCircle} /> Sports Concentration Program</li>
                    <li><FontAwesomeIcon icon={faDotCircle} /> Use of transitional skills to be used in specific education fields necessary for high school graduation</li>
                </ul>
            </div>
        </div>
    )
}

export default ListContent
