/*import Layout from './Layoutdashboard'; */
import React from 'react'
import {Sidebar} from '../components/Sidebar';
import Content from './Content';
import { Outlet } from 'react-router-dom';

import Card from './Card'
import './Dashboard.css';

export const Dashboard = () => {

    return (
      
      <div className="dashboard">
        <Sidebar/>

        <div className="dashboard--content">
           <Content/>
        </div>

      </div>
    )
    
}

export default Dashboard

