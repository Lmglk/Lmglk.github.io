import React, { ReactElement } from 'react';
import { EducationSection } from '../components/EducationSection';

import markdown from '../../../content/EducationSection.md';

export function StudiesSectionContainer(): ReactElement {
    return <EducationSection content={markdown} />;
}
