import React, { ReactElement } from 'react';
import { Navigation } from './Navigation';

import styles from './Header.pcss';

export function Header(): ReactElement {
    return (
        <header className={styles.header}>
            <Navigation inline />
        </header>
    );
}
