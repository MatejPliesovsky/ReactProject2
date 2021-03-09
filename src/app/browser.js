// app/browser.js
import React from 'react';
import { render } from 'react-dom';
import App from './index';

render(<App url='http://localhost:3000/appusers'
       pollInterval={2000}/>, document.getElementById('root'));
