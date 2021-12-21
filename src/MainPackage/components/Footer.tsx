import React, { ReactElement } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

import styles from './Footer.pcss';

export function Footer(): ReactElement {
    return (
        <div className={styles.grid}>
            <Logo />
            <div className={styles.navigation}>
                <Navigation />
            </div>
        </div>
    );
}
