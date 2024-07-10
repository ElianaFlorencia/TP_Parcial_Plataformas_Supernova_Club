import React from 'react'
import '../styles/Content.css';

import { Routes, Route } from 'react-router-dom';
import Card from './Card';
import Listausuarios from './Listausuarios';


export const Content = () => {
  return (
    <div className='content'>
      <Routes>
        <Route path='/'element={<Card/>} />
        <Route path='/Usuarios'element={<Listausuarios/>} />
      </Routes>
     
    </div>
  )
}

export default Content