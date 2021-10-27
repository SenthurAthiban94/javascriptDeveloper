import React from 'react';
import ReactDOM from 'react-dom';
import {reportWebVitals} from './webVitals';
import App from './app';
import ThemeWrapper from './themes';
import ErrorBoundary from './components/ErrorBoundary';
import './assets/css/tailwind.css';

ReactDOM.render(
    <ErrorBoundary>
        <ThemeWrapper>
            <App/>
        </ThemeWrapper>
    </ErrorBoundary>,
    document.getElementById('root')
);

reportWebVitals();