import React, { Fragment, ReactElement } from 'react';

import { Header } from './Header';
import { MainSectionContainer } from '../containers/MainSectionContainer';
import { ExperienceSectionContainer } from '../containers/ExperienceSectionContainer';
import { EducationSectionContainer } from '../containers/EducationSectionContainer';
import { SkillsSectionContainer } from '../containers/SkillsSectionContainer';
import { ContactsSectionContainer } from '../containers/ConactsSectionContainer';
import { Footer } from './Footer';

import styles from './App.pcss';

export function App(): ReactElement {
    return (
        <Fragment>
            <Header />
            <main className={styles.sections}>
                <MainSectionContainer />
                <ExperienceSectionContainer />
                <EducationSectionContainer />
                <SkillsSectionContainer />
                <ContactsSectionContainer />
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </Fragment>
    );
}
