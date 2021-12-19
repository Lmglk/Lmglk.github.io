import React, { ReactElement } from 'react';
import { SectionsEnum } from '../enums/SectionsEnum';
import { Logo } from './Logo';
import { Link } from '../../UIKItPackage/components/Link';

import styles from './Footer.pcss';

export function Footer(): ReactElement {
    const sections = Object.values(SectionsEnum).map(name => (
        <Link key={name} name={name} href="#section" />
    ));

    return (
        <div className={styles.grid}>
            <Logo />
            <div className={styles.sections}>{sections}</div>
        </div>
    );
}
