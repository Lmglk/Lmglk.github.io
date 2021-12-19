import React, { Fragment, ReactElement } from 'react';

import { Header } from './Header';
import { MainSectionContainer } from '../containers/MainSectionContainer';
import { ExperienceSectionContainer } from '../containers/ExperienceSectionContainer';
import { StudiesSectionContainer } from '../containers/StudiesSectionContainer';
import { SkillsSectionContainer } from '../containers/SkillsSectionContainer';

import styles from './App.pcss';

export function App(): ReactElement {
    return (
        <Fragment>
            <Header />
            <main className={styles.sections}>
                <MainSectionContainer />
                <ExperienceSectionContainer />
                <StudiesSectionContainer />
                <SkillsSectionContainer />
            </main>
        </Fragment>
    );
}
