import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './Paragraph.pcss';

export function Paragraph(props: PropsWithChildren<{}>): ReactElement {
    return <p className={styles.paragraph}>{props.children}</p>;
}
