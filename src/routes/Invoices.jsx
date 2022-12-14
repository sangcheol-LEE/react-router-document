import React from 'react';
import { getInvoices } from '../data';
import { NavLink, Outlet } from 'react-router-dom';

const Invoices = () => {
  let invoices = getInvoices();
    return (
      <div style={{ display: "flex" }}>
        <nav style={{ borderRight: "solid 1px",padding: "1rem",}}>
          {invoices.map((invoice) => (
            <NavLink style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
  );
};

export default Invoices;