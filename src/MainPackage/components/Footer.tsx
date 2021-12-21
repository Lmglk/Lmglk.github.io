import React, { ReactElement } from 'react';
import { SectionsEnum } from '../enums/SectionsEnum';
import { Logo } from './Logo';
import { Link } from '../../UIKItPackage/components/Link';
import { UnorderedList } from '../../UIKItPackage/components/UnorderedList';
import { ListItem } from '../../UIKItPackage/components/ListItem';

import styles from './Footer.pcss';

export function Footer(): ReactElement {
    const sections = Object.values(SectionsEnum).map(name => (
        <ListItem key={name} showMarker={false}>
            <Link name={name} href="#section" />
        </ListItem>
    ));

    return (
        <div className={styles.grid}>
            <Logo />
            <nav className={styles.sections}>
                <UnorderedList>{sections}</UnorderedList>
            </nav>
        </div>
    );
}
