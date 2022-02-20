import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { SectionsEnum } from '../enums/SectionsEnum';
import { markdownOptions } from '../constants/markdownOptions';
import { sections } from '../constants/sections';

import { UnorderedList } from '../../UIKItPackage/components/UnorderedList';
import { H2 } from '../../UIKItPackage/components/H2';

import styles from './SkillsSection.pcss';

interface IProps {
    content: string;
}

export function SkillsSection(props: IProps): ReactElement {
    const section = sections.get(SectionsEnum.skills);
    const options = {
        ...markdownOptions,
        overrides: {
            ...markdownOptions.overrides,
            h2: {
                component: H2,
                props: {
                    id: section ? section.id : null,
                },
            },
            ul: {
                component: UnorderedList,
                props: {
                    showMarker: false,
                },
            },
        },
    };

    return (
        <section className={styles.content}>
            <Markdown options={options}>{props.content}</Markdown>
        </section>
    );
}
