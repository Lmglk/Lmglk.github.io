import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './MainPackage/components/App';

import './index.pcss';

const container = document.getElementById('app');

ReactDOM.render(
    React.createElement(React.StrictMode, null, React.createElement(App, null)),
    container
);
