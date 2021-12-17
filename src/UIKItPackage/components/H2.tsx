import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './H2.pcss';

export function H2(props: PropsWithChildren<{}>): ReactElement {
    return <h2 className={styles.heading}>{props.children}</h2>;
}
