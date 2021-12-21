import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { SectionsEnum } from '../enums/SectionsEnum';
import { markdownOptions } from '../constants/markdownOptions';
import { sections } from '../constants/sections';

import { H1 } from '../../UIKItPackage/components/H1';

import image from '../../../assets/images/person@1x.webp';
import image2x from '../../../assets/images/person@2x.webp';

import styles from './MainSection.pcss';

interface IProps {
    content: string;
}

export function MainSection(props: IProps): ReactElement {
    const section = sections.get(SectionsEnum.about);
    const options = {
        ...markdownOptions,
        overrides: {
            ...markdownOptions.overrides,
            h1: {
                component: H1,
                props: {
                    id: section ? section.id : null,
                },
            },
        },
    };

    return (
        <section className={styles.grid}>
            <Markdown className={styles.content} options={options}>
                {props.content}
            </Markdown>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={image}
                    srcSet={`${image2x} 2x`}
                    alt="Leonid Veretennikov"
                    loading="lazy"
                />
                <div className={styles.imageShadow} />
            </div>
        </section>
    );
}
