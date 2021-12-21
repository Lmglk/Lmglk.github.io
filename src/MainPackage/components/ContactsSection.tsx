import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { markdownOptions } from '../constants/markdownOptions';

import styles from './ContactsSection.pcss';
import { ListItem } from '../../UIKItPackage/components/ListItem';

interface IProps {
    content: string;
}

export function ContactsSection(props: IProps): ReactElement {
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
        <section className={styles.section}>
            <Markdown options={options}>{props.content}</Markdown>
        </section>
    );
}
