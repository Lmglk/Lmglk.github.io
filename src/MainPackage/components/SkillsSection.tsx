import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { markdownOptions } from '../constants/markdownOptions';

import styles from './SkillsSection.pcss';
import { ListItem } from '../../UIKItPackage/components/ListItem';

interface IProps {
    content: string;
}

export function SkillsSection(props: IProps): ReactElement {
    const options = {
        ...markdownOptions,
        overrides: {
            ...markdownOptions.overrides,
            li: {
                component: ListItem,
                props: {
                    showMarker: false,
                },
            },
        },
    };

    return (
        <section>
            <Markdown className={styles.content} options={options}>
                {props.content}
            </Markdown>
        </section>
    );
}
