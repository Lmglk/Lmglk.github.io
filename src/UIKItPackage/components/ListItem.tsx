import React, { PropsWithChildren } from 'react';

import styles from './ListItem.pcss';

export function ListItem(props: PropsWithChildren<{}>): React.ReactElement {
    return <li className={styles.listItem}>{props.children}</li>;
}
