import * as React from 'react';
import { Header } from './Header';
import { data } from '../data';

export function App() {
    return (
        <div>
            <Header
                name={data.name}
                role={data.role}
                imageUrl={data.imageURL}
            />
        </div>
    );
}
