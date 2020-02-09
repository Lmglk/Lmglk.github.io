import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './CorePackage/App';

const rootElement = document.getElementById('app');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
);