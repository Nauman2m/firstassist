import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import React from 'react';
import BeforeHeadingText from '../../common/BeforeHeadingText';
import * as styles from './ListContent.module.scss';

export const fragment = graphql`
  fragment ListContent on WpPage_Pagesections_Sections_ListContent {
    beforeHeadingText
    content
    fieldGroupName
    listItems {
      item
    }
  }
`;

const ListContent = ({beforeHeadingText, content, listItems }) => {
    return (
        <div className={styles.ListContent}>
            <div className={styles.wrap}>
                <BeforeHeadingText text={beforeHeadingText} />
                <div dangerouslySetInnerHTML={{__html: content}} />
                <ul>
                    {
                        listItems?.map((item, index) => {
                            return <li><FontAwesomeIcon icon={faDotCircle} /> {item?.item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ListContent
