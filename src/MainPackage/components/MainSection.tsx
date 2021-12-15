import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';

import markdown from '../../../content/MainSection.md';
import image from '../../../assets/images/person@1x.webp';
import image2x from '../../../assets/images/person@2x.webp';

import styles from './MainSection.pcss';

export function MainSection(): ReactElement {
    return (
        <main className={styles.mainSectionGrid}>
            <Markdown className={styles.content}>{markdown}</Markdown>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={image}
                    srcSet={`${image2x} 2x`}
                    alt="Leonid Veretennikov"
                />
                <div className={styles.imageShadow} />
            </div>
        </main>
    );
}
