import React from 'react'
import Layout from './Layoutdashboard';
import Card from './Card'
import './Dashboard.css';

export const Dashboard = () => {

    return (
      <div className="dashboard">
      <Layout>
        <Card title="Card 1" content="Contenido del card 1." />
        <Card title="Card 2" content="Contenido del card 2." />
        <Card title="Card 3" content="Contenido del card 3." />
      </Layout>
      </div>
    )
    
}

export default Dashboard

