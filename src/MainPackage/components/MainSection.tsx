import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';

import styles from './MainSection.pcss';

import markdown from '../../../content/MainSection.md';

export function MainSection(): ReactElement {
    return (
        <main className={styles.mainSectionGrid}>
            <Markdown className={styles.content}>{markdown}</Markdown>
            <img className={styles.image} src="" alt="" />
        </main>
    );
}
