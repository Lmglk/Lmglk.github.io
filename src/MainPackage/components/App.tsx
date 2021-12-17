import React, { Fragment, ReactElement } from 'react';

import { Header } from './Header';
import { MainSectionContainer } from '../containers/MainSectionContainer';
import { ExperienceSectionContainer } from '../containers/ExperienceSectionContainer';

import styles from './App.pcss';
import { StudiesSectionContainer } from '../containers/StudiesSectionContainer';

export function App(): ReactElement {
    return (
        <Fragment>
            <Header />
            <main className={styles.sections}>
                <MainSectionContainer />
                <ExperienceSectionContainer />
                <StudiesSectionContainer />
            </main>
        </Fragment>
    );
}
