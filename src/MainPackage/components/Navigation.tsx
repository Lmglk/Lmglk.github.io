import React, { ReactElement } from 'react';
import { SectionsEnum } from '../enums/SectionsEnum';
import { classList } from '../../UIKItPackage/utils/classList';

import { Link } from '../../UIKItPackage/components/Link';

import styles from './Navigation.pcss';

interface IProps {
    inline?: boolean;
}

export function Navigation({ inline = false }: IProps): ReactElement {
    const sections = Object.values(SectionsEnum).map(name => (
        <li className={styles.navigationItem} key={name}>
            <Link name={name} href="#section" />
        </li>
    ));

    return (
        <nav>
            <ul
                className={classList({
                    [styles.list]: true,
                    [styles.inline]: inline,
                })}
            >
                {sections}
            </ul>
        </nav>
    );
}
