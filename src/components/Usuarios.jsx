
import React, { useEffect } from "react";
import Listausuarios from './Listausuarios';
import Content from './Content';
import { useNavigate } from "react-router-dom";


export const Usuarios = () => {
  return (
    <Content>
    <div className="usuarios">
       
        <Listausuarios/>

      </div>
     </Content>
  )
}

export default Usuarios