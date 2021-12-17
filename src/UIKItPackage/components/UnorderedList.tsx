import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './UnorderedList.pcss';

export function UnorderedList(props: PropsWithChildren<{}>): ReactElement {
    return <ul className={styles.list}>{props.children}</ul>;
}
