import { Provider } from 'react-redux'
import {store , persistor } from './store/store.ts'
import { createRoot } from 'react-dom/client'
import './index.css'
import './my_css.css'
import App from './App.tsx'
import AppContextProvider from './providers/AppContext.tsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
    </PersistGate>
  </Provider>
)
