import React from 'react'
import '../styles/Dashboard.css';

import {Sidebar} from '../components/Sidebar';
import Content from '../components/Content';
import { Outlet } from 'react-router-dom';
import Card from '../components/Card'


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

