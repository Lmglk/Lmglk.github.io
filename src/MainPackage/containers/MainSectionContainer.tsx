import React, { ReactElement } from 'react';

import { MainSection } from '../components/MainSection';

import markdown from '../../../content/MainSection.md';

export function MainSectionContainer(): ReactElement {
    return <MainSection content={markdown} />;
}
