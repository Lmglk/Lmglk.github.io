import React, { ReactElement } from 'react';
import { SkillsSection } from '../components/SkillsSection';

import markdown from '../../../content/SkillsSection.md';

export function SkillsSectionContainer(): ReactElement {
    return <SkillsSection content={markdown} />;
}
