import React, { ReactElement } from 'react';

import { ExperienceSection } from '../components/ExperienceSection';

import markdown from '../../../content/ExperienceSection.md';

export function ExperienceSectionContainer(): ReactElement {
    return <ExperienceSection content={markdown} />;
}
