import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './H4.pcss';

export function H4(props: PropsWithChildren<{}>): ReactElement {
    return <h4 className={styles.heading}>{props.children}</h4>;
}
