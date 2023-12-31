import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import {store} from './store/store.ts'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App></App>
        </Provider>
    </React.StrictMode>,
);
