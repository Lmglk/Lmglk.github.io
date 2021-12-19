import React, { ReactElement } from 'react';

import { Link } from '../../UIKItPackage/components/Link';
import { SectionsEnum } from '../enums/SectionsEnum';

import styles from './Header.pcss';

export function Header(): ReactElement {
    const sections = Object.values(SectionsEnum).map(name => (
        <Link key={name} name={name} href="#section" />
    ));

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>{sections}</nav>
        </header>
    );
}
