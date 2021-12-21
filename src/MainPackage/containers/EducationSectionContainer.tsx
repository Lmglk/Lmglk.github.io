import React, { ReactElement } from 'react';
import { EducationSection } from '../components/EducationSection';

import markdown from '../../../content/EducationSection.md';

export function EducationSectionContainer(): ReactElement {
    return <EducationSection content={markdown} />;
}
