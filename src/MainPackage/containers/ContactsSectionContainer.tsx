import React, { ReactElement } from 'react';
import { ContactsSection } from '../components/ContactsSection';

import markdown from '../../../content/ConactsSection.md';

export function ContactsSectionContainer(): ReactElement {
    return <ContactsSection content={markdown} />;
}
