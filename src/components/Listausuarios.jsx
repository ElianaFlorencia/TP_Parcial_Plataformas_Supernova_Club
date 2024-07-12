import React from "react";
import { useState } from 'react';
import Swal from 'sweetalert2';
import "../styles/Listausuarios.css"; 

const Listausuarios = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', surname: '', email: '', socioId: '', role: '' });
    const [editingUser, setEditingUser] = useState(null);

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        if (newUser.name && newUser.surname && newUser.email && newUser.socioId && newUser.role) {
            if (!isValidEmail(newUser.email)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, introduce un correo electrónico válido.'
                });
                return;
            }

            if (editingUser) {
                setUsers(users.map(user => (user.id === editingUser.id ? { ...editingUser, ...newUser } : user)));
                setEditingUser(null);
            } else {
                setUsers([...users, { ...newUser, id: Date.now() }]);
            }
            setNewUser({ name: '', surname: '', email: '', socioId: '', role: '' });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Advertencia',
                text: 'Completar todos los campos'
            });
        }
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEditUser = (user) => {
        setNewUser({ name: user.name, surname: user.surname, email: user.email, socioId: user.socioId, role: user.role });
        setEditingUser(user);
    };

    return (
        <div className="usuarioListContain">
            <div className="containerFormUsuarios">
                <input type="text" name="name" placeholder="Nombre" value={newUser.name} onChange={handleChange} />
                <input type="text" name="surname" placeholder="Apellido" value={newUser.surname} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleChange} />
                <input type="text" name="socioId" placeholder="Socio ID" value={newUser.socioId} onChange={handleChange} />
                <input type="text" name="role" placeholder="Rol de Usuario" value={newUser.role} onChange={handleChange} />
                <button onClick={handleAddUser}>{editingUser ? 'Actualizar' : 'Guardar'}</button>
            </div>
            <table className="table-users">
               <thead className="table-header-usuarios">
                    <tr className="table-header-row-usuarios">
                        <th className="table-header-no-us">Nro</th>
                        <th className="table-header-name-us">Nombre</th>
                        <th className="table-header-surname-us">Apellido</th>
                        <th className="table-header-email-us">Email</th>
                        <th className="table-header-socio-id-us">Socio ID</th>
                        <th className="table-header-role-us">Rol de Usuario</th>
                        <th className="table-header-actions-us">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{user.socioId}</td>
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
