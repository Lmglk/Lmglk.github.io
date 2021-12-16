import React, { ReactElement } from 'react';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

import { ListItem } from '../../UIKItPackage/components/ListItem';
import { UnorderedList } from '../../UIKItPackage/components/UnorderedList';

import styles from './ExperienceSection.pcss';

interface IProps {
    content: string;
}

export function ExperienceSection(props: IProps): ReactElement {
    const options: MarkdownToJSX.Options = {
        overrides: {
            ul: {
                component: UnorderedList,
            },
            li: {
                component: ListItem,
            },
        },
    };

    return (
        <section className={styles.content}>
            <Markdown options={options}>{props.content}</Markdown>
        </section>
    );
}
