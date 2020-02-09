import * as React from 'react';
import { Header } from './Header';
import { Contact } from './Contact';
import { data } from '../data';

export function App() {
    return (
        <div>
            <Header
                name={data.name}
                role={data.role}
                imageUrl={data.imageURL}
            />
            <Contact
                phone={data.contacts.phone}
                email={data.contacts.email}
                github={data.contacts.github}
                location={data.contacts.location}
            />
        </div>
    );
}
