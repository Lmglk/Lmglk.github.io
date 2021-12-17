import React, { Fragment, ReactElement } from 'react';

import { Header } from './Header';
import { MainSectionContainer } from '../containers/MainSectionContainer';
import { ExperienceSectionContainer } from '../containers/ExperienceSectionContainer';

import styles from './App.pcss';

export function App(): ReactElement {
    return (
        <Fragment>
            <Header />
            <main className={styles.sections}>
                <MainSectionContainer />
                <ExperienceSectionContainer />
            </main>
        </Fragment>
    );
}
