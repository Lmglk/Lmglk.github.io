import React, { Fragment, ReactElement } from 'react';

import { Header } from './Header';
import { MainSection } from './MainSection';

export function App(): ReactElement {
    return (
        <Fragment>
            <Header />
            <MainSection />
        </Fragment>
    );
}
