import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './H3.pcss';

export function H3(props: PropsWithChildren<{}>): ReactElement {
    return <h3 className={styles.heading}>{props.children}</h3>;
}
