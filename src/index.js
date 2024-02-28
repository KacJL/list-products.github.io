import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css'
import './components/UI/pages/Pages.css'
import MainStore from "./store/MainStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        store: new MainStore()
    }}>
        <App/>
    </Context.Provider>
);
