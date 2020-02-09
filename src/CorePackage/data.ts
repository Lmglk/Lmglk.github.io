import { IPerson } from './interfaces/IPerson';
import personURL from '../../assets/person.jpeg';

export const data: IPerson = {
    name: 'Leonid Veretennikov',
    role: 'Frontend-developer',
    imageURL: personURL,
    contacts: {
        phone: '+7 (931) 965-76-77',
        email: 'megalok10@gmail.com',
        github: 'https://github.com/Lmglk',
        location: 'Saint Petersburg',
    },
};
