import React, { Fragment, ReactElement } from 'react';

import { MainSectionContainer } from '../containers/MainSectionContainer';
import { Header } from './Header';

export function App(): ReactElement {
    return (
        <Fragment>
            <Header />
            <MainSectionContainer />
        </Fragment>
    );
}
