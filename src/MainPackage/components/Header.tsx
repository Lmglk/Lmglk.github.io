import React from 'react';

import { Tab } from '../../UIKItPackage/components/Tab';
import { SectionsEnum } from '../enums/SectionsEnum';

import styles from './Header.pcss';

export function Header(): React.ReactElement {
    const sections = Object.values(SectionsEnum).map((name, index) => (
        <Tab key={name} name={name} />
    ));

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>{sections}</nav>
        </header>
    );
}
