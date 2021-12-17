import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';
import { markdownOptions } from '../constants/markdownOptions';

import styles from './StudiesSection.pcss';

interface IProps {
    content: string;
}

export function StudiesSection(props: IProps): ReactElement {
    return (
        <section className={styles.content}>
            <Markdown options={markdownOptions}>{props.content}</Markdown>
        </section>
    );
}
