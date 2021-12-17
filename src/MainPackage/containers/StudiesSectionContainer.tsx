import React, { ReactElement } from 'react';
import { StudiesSection } from '../components/StudiesSection';

import markdown from '../../../content/StudiesSection.md';

export function StudiesSectionContainer(): ReactElement {
    return <StudiesSection content={markdown} />;
}
