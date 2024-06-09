import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import AppStore from "./store/AppStore"

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider>
    <React.StrictMode>
      <Context.Provider value = {
        {
          store: new AppStore(),
        }
      }>
        <App />
      </Context.Provider>
    </React.StrictMode>
  </MantineProvider>
);
