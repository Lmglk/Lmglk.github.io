import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { SectionsEnum } from '../enums/SectionsEnum';
import { markdownIconOptions } from '../constants/markdownIconOptions';
import { sections } from '../constants/sections';

import { H2 } from '../../UIKItPackage/components/H2';

import styles from './ContactsSection.pcss';

interface IProps {
    content: string;
}

export function ContactsSection(props: IProps): ReactElement {
    const section = sections.get(SectionsEnum.contacts);
    const options = {
        overrides: {
            ...markdownIconOptions.overrides,
            h2: {
                component: H2,
                props: {
                    id: section ? section.id : null,
                },
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
