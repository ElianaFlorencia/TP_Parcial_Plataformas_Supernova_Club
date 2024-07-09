import React from 'react';
import './Layoutdashboard.css'; // Importa el CSS específico para este componente

const Layout = ({ children }) => {
  return (
    <div className="columns">
      <div className="column sidebar">
        <h2>Acá iría el sidebar si tuviéramos</h2>
      </div>
      <div className="column main-content">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
