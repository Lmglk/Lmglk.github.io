import React, { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';

import styles from './ExperienceSection.pcss';

interface IProps {
    content: string;
}

export function ExperienceSection(props: IProps): ReactElement {
    return (
        <section>
            <Markdown className={styles.content}>{props.content}</Markdown>
        </section>
    );
}
