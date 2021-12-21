import React, { ReactElement } from 'react';

import styles from './Link.pcss';

type IProps = {
    name: string;
    href: string;
};

export function Link({ name, href }: IProps): ReactElement {
    return (
        <a className={styles.link} href={href}>
            {name}
        </a>
    );
}
