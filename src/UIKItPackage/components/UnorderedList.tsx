import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './UnorderedList.pcss';

type TProps = PropsWithChildren<{}>;

export function UnorderedList(props: TProps): ReactElement {
    return <ul className={styles.list}>{props.children}</ul>;
}
