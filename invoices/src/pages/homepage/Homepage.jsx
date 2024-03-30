import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Title } from '../../components/title/Title';
import { Sidebar } from '../../components/sidebar/Sidebar';

export const HomePage = () => {
  return (
    <div className="container">
      <Title title="Bookkeeper!" />
      <nav>
        <Link to="/invoices">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
        <span> | </span>
        <Link to="/calculator">Calculator</Link>
      </nav>
      <Sidebar title="Muj Sidebar"></Sidebar>
      <Outlet />
    </div>
  );
};
