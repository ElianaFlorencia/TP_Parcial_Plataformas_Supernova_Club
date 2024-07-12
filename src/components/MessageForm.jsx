import React, { useState } from 'react';
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'
import '../styles/MessageForm.css'

const MessageForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Aquí iría el código para enviar los datos del formulario, por ejemplo:
        // Simplemente mostramos la alerta como ejemplo
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: '¡Tu mensaje ha sido enviado con éxito!',
          showConfirmButton: false,
          timer: 3500,
          customClass: {
            popup: 'medium-swal', // Clase CSS para el tamaño personalizado
          },
          width: '30rem', // Ancho personalizado del cuadro de diálogo
        });
    
        // Puedes también resetear el formulario después de enviarlo
        e.target.reset();
      };
  return (
    <div className= 'message--form--container'>
    <form id='form' className='messageformtitle'  onSubmit={handleSubmit}>
      <h2>Consultanos</h2>

       <MDBInput 
         
          name='name' 
          placeholder='Nombre'
          value={formData.name} 
          onChange={handleChange} 
          wrapperClass='mb-4' 
        />

        <MDBInput 
          type='email' 
          name='email' 
          placeholder='Email'
          value={formData.email} 
          onChange={handleChange} 
          wrapperClass='mb-4' 
        />

        <MDBInput 
          name='subject' 
          placeholder='Asunto'
          value={formData.subject} 
          onChange={handleChange} 
          wrapperClass='mb-4' 
        />

        <MDBTextArea
          name='message' 
          placeholder='Mensaje'
          value={formData.message} 
          onChange={handleChange} 
          wrapperClass='mb-4' 
          rows='6' 
        />
    
        <div className='button-container'>
          <button className='btn btn-primary custom-btn-message' type='submit'>
            Enviar
          </button>
        </div>
    </form>
    </div>
  );
};

export default MessageForm;
