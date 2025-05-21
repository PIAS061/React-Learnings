import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import HomePage from './Pages/Home.jsx';
import ErrorPage from './Pages/ErrorPage.jsx'; // ✅ Make sure this path is correct
import AboutPage from './Pages/About.jsx';
import SkillPage from './Pages/Skills.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "skills",
        element: <SkillPage />,
      },
      {
        path: "about",
        element: <AboutPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
