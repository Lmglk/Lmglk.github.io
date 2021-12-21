import React, { ReactElement } from 'react';
import { SectionsEnum } from '../enums/SectionsEnum';
import { Link } from '../../UIKItPackage/components/Link';
import { ListItem } from '../../UIKItPackage/components/ListItem';
import { UnorderedList } from '../../UIKItPackage/components/UnorderedList';

import styles from './Header.pcss';

export function Header(): ReactElement {
    const sections = Object.values(SectionsEnum).map(name => (
        <ListItem key={name} showMarker={false}>
            <Link name={name} href="#section" />
        </ListItem>
    ));

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <UnorderedList>{sections}</UnorderedList>
            </nav>
        </header>
    );
}
