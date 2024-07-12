import React from "react";
import { useState } from 'react'
/*import "../styles/Listausuarios.css"; */


const Listausuarios = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
    const [editingUser, setEditingUser] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        if (newUser.name && newUser.email && newUser.role) {
            if (editingUser) {
                // Update user
                setUsers(users.map(user => (user.id === editingUser.id ? { ...editingUser, ...newUser } : user)));
                setEditingUser(null);
            } else {
                // Add new user
                setUsers([...users, { ...newUser, id: Date.now() }]);
            }
            setNewUser({ name: '', email: '', role: '' });
        } else {
            alert("All fields are required");
        }
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEditUser = (user) => {
        setNewUser({ name: user.name, email: user.email, role: user.role });
        setEditingUser(user);
    };

    return (
        <div className="usuarioListContain">
            <div className="containerForm">
                <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} />
                <input type="text" name="role" placeholder="Role" value={newUser.role} onChange={handleChange} />
                <button onClick={handleAddUser}>{editingUser ? 'Update User' : 'Add User'}</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleEditUser(user)}>Edit</button>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listausuarios;
