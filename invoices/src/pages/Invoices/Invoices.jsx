import React from 'react';
import { invoices } from '../../components/data/data';
import { useParams, Link } from 'react-router-dom';

export const Invoices = () => {
  const { invoiceId } = useParams();
  const invoiceData = invoices.find((inv) => inv.id === Number(invoiceId)); //detail pro vybranou fakturu
  const invoiceLines = invoices.map((o) => (
    <li>
      <Link to={'/invoices/' + o.id}>{o.id}</Link>
      <span> | </span>
      {o.product}
      <span> | </span>
      {o.amount},-)
    </li> //seznam vsech faktur
  ));

  return (
    <main>
      <h2>Invoices</h2>
      <h3>
        {invoiceData.product} ({invoiceData.amount},-)
      </h3>
      <p>Here are your issued invoices for the last month</p>
      <ul>{invoiceLines}</ul>
    </main>
  );
};
