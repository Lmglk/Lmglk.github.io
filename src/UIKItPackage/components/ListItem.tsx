import React, { PropsWithChildren } from 'react';

import styles from './ListItem.pcss';
import { classList } from '../utils/classList';

interface IProps {
    showMarker: boolean;
}

export function ListItem({
    children,
    showMarker = true,
}: PropsWithChildren<IProps>): React.ReactElement {
    return (
        <li
            className={classList({
                [styles.listItem]: styles.listItem,
                [styles.showMarker]: showMarker,
            })}
        >
            {children}
        </li>
    );
}
