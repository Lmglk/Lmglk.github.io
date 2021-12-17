import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { markdownOptions } from '../constants/markdownOptions';

import image from '../../../assets/images/person@1x.webp';
import image2x from '../../../assets/images/person@2x.webp';

import styles from './MainSection.pcss';

interface IProps {
    content: string;
}

export function MainSection(props: IProps): ReactElement {
    return (
        <section className={styles.grid}>
            <Markdown className={styles.content} options={markdownOptions}>
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
