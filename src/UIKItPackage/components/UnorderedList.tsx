import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './UnorderedList.pcss';
import { classList } from '../utils/classList';

interface IProps {
    showMarker: boolean;
}

export function UnorderedList({
    children,
    showMarker = true,
}: PropsWithChildren<IProps>): ReactElement {
    return (
        <ul
            className={classList({
                [styles.list]: true,
                [styles.showMarker]: showMarker,
            })}
        >
            {children}
        </ul>
    );
}
