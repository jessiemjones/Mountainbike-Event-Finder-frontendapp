import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import EventProvider from './EventProvider';

ReactDOM.render(
<EventProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</EventProvider>
, document.getElementById('root'));
