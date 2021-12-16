import React, { PropsWithChildren } from 'react';

import styles from './ListItem.pcss';

type TProps = PropsWithChildren<{}>;

export function ListItem(props: TProps): React.ReactElement {
    return <li className={styles.listItem}>{props.children}</li>;
}
