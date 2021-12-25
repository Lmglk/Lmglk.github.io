import React, { ReactElement, HTMLAttributes } from 'react';

import styles from './Button.pcss';

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

export function Button({
    children,
    className = '',
    ...props
}: IProps): ReactElement {
    const classList = `${styles.button} ${className}`;

    return (
        <button type="button" {...props} className={classList}>
            {children}
        </button>
    );
}
