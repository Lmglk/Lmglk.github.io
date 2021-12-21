import React, { ReactElement } from 'react';

import styles from './Logo.pcss';

export function Logo(): ReactElement {
    return (
        <div className={styles.logo}>
            <div className={styles.name}>Leonid</div>
            <div className={styles.lastName}>Veretennikov</div>
        </div>
    );
}
