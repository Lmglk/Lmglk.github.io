import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { markdownIconOptions } from '../constants/markdownIconOptions';

import { H2 } from '../../UIKItPackage/components/H2';

import styles from './ContactsSection.pcss';

interface IProps {
    content: string;
}

export function ContactsSection(props: IProps): ReactElement {
    const options = {
        overrides: {
            ...markdownIconOptions.overrides,
            h2: {
                component: H2,
            },
            ul: {
                props: {
                    className: styles.list,
                },
            },
            li: {
                props: {
                    className: styles.listItem,
                },
            },
            strong: {
                props: {
                    className: styles.listItemTitle,
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
