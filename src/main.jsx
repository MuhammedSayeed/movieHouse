import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './Hooks/Context/AuthContext.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Rtk/store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>

  </AuthContextProvider>

)
