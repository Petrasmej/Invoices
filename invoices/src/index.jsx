import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/homepage/Homepage';
import { Expenses } from './pages/expenses/Expenses';
import { Invoices } from './pages/Invoices/Invoices';
import { Calculator } from './pages/calculator/Calculator';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/expenses',
        element: <Expenses />,
      },
      {
        path: '/invoices',
        element: <Invoices />,
      },
      {
        path: '/invoices/:invoiceId',
        element: <Invoices />,
      },
      {
        path: '/calculator',
        element: <Calculator />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
