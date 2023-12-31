import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './store/store'
import { Provider } from 'react-redux'

import "@ui5/webcomponents-icons/dist/AllIcons.js"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Provider store={store}><App /></Provider>);

