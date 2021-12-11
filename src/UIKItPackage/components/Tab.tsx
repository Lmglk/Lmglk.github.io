import React from 'react';

import { classList } from '../utils/classList';

import styles from './Tab.pcss';

type IProps = {
    name: string;
    active?: boolean;
    onClick?: () => void;
};

export function Tab({
    name,
    onClick,
    active = false,
}: IProps): React.ReactElement {
    const classes = classList({
        [styles.tab]: true,
        [styles.active]: active,
    });

    return (
        <button
            className={classes}
            type="button"
            value={name}
            onClick={onClick}
        >
            {name}
        </button>
    );
}
