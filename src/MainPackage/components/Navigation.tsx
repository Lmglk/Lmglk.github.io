import React, { ReactElement } from 'react';
import { classList } from '../../UIKItPackage/utils/classList';
import { sections } from '../constants/sections';

import { Link } from '../../UIKItPackage/components/Link';

import styles from './Navigation.pcss';

interface IProps {
    inline?: boolean;
}

export function Navigation({ inline = false }: IProps): ReactElement {
    const sectionList = Array.from(sections.values()).map(section => (
        <li className={styles.navigationItem} key={section.id}>
            <Link name={section.title} href={`#${section.id}`} />
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
                {sectionList}
            </ul>
        </nav>
    );
}
