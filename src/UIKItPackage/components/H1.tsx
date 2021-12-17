import React, { ReactElement, PropsWithChildren } from 'react';

import styles from './H1.pcss';

export function H1(props: PropsWithChildren<{}>): ReactElement {
    return <h1 className={styles.heading}>{props.children}</h1>;
}
