import React, { ReactElement } from 'react';

import { classList } from '../utils/classList';

import styles from './Tab.pcss';

type IProps = {
    name: string;
    href: string;
    active?: boolean;
    onClick?: () => void;
};

export function Tab({
    name,
    href,
    onClick,
    active = false,
}: IProps): ReactElement {
    const classes = classList({
        [styles.tab]: true,
        [styles.active]: active,
    });

    return (
        <a className={classes} onClick={onClick} href={href}>
            {name}
        </a>
    );
}
