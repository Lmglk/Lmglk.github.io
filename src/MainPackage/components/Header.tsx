import React, { ReactElement } from 'react';

import { Tab } from '../../UIKItPackage/components/Tab';
import { SectionsEnum } from '../enums/SectionsEnum';

import styles from './Header.pcss';

export function Header(): ReactElement {
    const sections = Object.values(SectionsEnum).map(name => (
        <Tab key={name} name={name} href="#" />
    ));

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>{sections}</nav>
        </header>
    );
}
