import React, { PropsWithChildren, ReactElement } from 'react';

import styles from './H2.pcss';
import { classList } from '../utils/classList';

interface IProps {
    id: string;
    className: string;
}

export function H2(props: PropsWithChildren<IProps>): ReactElement {
    return (
        <h2
            id={props.id}
            className={classList({
                [styles.heading]: true,
                [props.className]: Boolean(props.className),
            })}
        >
            {props.children}
        </h2>
    );
}
