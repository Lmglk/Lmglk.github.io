import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { SectionsEnum } from '../enums/SectionsEnum';
import { markdownOptions } from '../constants/markdownOptions';
import { sections } from '../constants/sections';

import { H2 } from '../../UIKItPackage/components/H2';

import styles from './ExperienceSection.pcss';

interface IProps {
    content: string;
}

export function ExperienceSection(props: IProps): ReactElement {
    const section = sections.get(SectionsEnum.experience);
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
        },
    };

    return (
        <section className={styles.content}>
            <Markdown options={options}>{props.content}</Markdown>
        </section>
    );
}
