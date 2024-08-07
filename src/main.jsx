import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './routers/Routers.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthInformation from './components/AuthInformation.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthInformation>
        <RouterProvider router={router} />
      </AuthInformation>
    </HelmetProvider>
  </React.StrictMode>,
)
