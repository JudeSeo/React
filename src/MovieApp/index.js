import React from 'react';
import ReactDOM from 'react-dom/client';
import movieApp from './App';
import sandApp from '../Sandbox/useInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <movieApp />
);
root.render(
    <sandApp />
);