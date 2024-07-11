import React, { useState } from 'react';
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import '../styles/MessageForm.css'

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    sendCopy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className= 'form--container'>
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
    

       <button className='btn btn-primary btn-block my-4' type='submit'>
          Enviar
        </button>
    </form>
    </div>
  );
};

export default MessageForm;
