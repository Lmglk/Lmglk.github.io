import { SectionsEnum } from '../enums/SectionsEnum';
import { Section } from '../interfaces/Section';

export const sections = new Map<SectionsEnum, Section>()
    .set(SectionsEnum.about, {
        id: 'about',
        title: SectionsEnum.about,
    })
    .set(SectionsEnum.experience, {
        id: 'experience',
        title: SectionsEnum.experience,
    })
    .set(SectionsEnum.studies, {
        id: 'education',
        title: SectionsEnum.studies,
    })
    .set(SectionsEnum.skills, {
        id: 'skills',
        title: SectionsEnum.skills,
    })
    .set(SectionsEnum.contacts, {
        id: 'contacts',
        title: SectionsEnum.contacts,
    });