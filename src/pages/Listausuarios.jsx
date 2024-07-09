import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Listausuarios = () => {
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <table className='table is-striped is-fullwidth'>
        <thread>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thread>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
          
    </div>
  )
}

export default Listausuarios