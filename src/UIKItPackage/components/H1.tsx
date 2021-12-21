import React, { ReactElement, PropsWithChildren } from 'react';

import styles from './H1.pcss';
import { classList } from '../utils/classList';

interface IProps {
    id: string;
    className: string;
}

export function H1(props: PropsWithChildren<IProps>): ReactElement {
    return (
        <h1
            id={props.id}
            className={classList({
                [styles.heading]: true,
                [props.className]: Boolean(props.className),
            })}
        >
            {props.children}
        </h1>
    );
}
