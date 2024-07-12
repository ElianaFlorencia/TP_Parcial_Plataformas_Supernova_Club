import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import '../styles/ReservaForm.css';
import Swal from 'sweetalert2'

export const ReservaForm = () => {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        memberNumber: '',
        sport: '',
        date: null,
        startTime: '10:00',
        endTime: '11:00'
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleDateChange = (date) => {
        setFormData({
          ...formData,
          date: date
        });
      };
    
      const handleTimeChange = (name, time) => {
        setFormData({
          ...formData,
          [name]: time
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Aquí iría el código para enviar los datos del formulario
    
        // Mostrar la alerta de éxito con SweetAlert2
        Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: '¡Tu reserva esta pendiente de confirmación!',
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
        <div className='form--container'>
          <form id='form' className='messageformtitle' onSubmit={handleSubmit}>
            <h2>Reservar</h2>
    
            <div className='name-container'>
              <MDBInput
                name='firstName'
                placeholder='Nombre'
                value={formData.firstName}
                onChange={handleChange}
                wrapperClass='mb-4'
              />
              <MDBInput
                name='lastName'
                placeholder='Apellido'
                value={formData.lastName}
                onChange={handleChange}
                wrapperClass='mb-4'
                className='ml-4'
              />
            </div>
    
            <MDBInput
              name='memberNumber'
              placeholder='Nro de Socio'
              value={formData.memberNumber}
              onChange={handleChange}
              wrapperClass='mb-4'
            />
    
            <div className='mb-4'>
              <label htmlFor='reserva--sport'>Deporte</label>
              <select
                name='sport'
                value={formData.sport}
                onChange={handleChange}
                className='form-control'
              >
                <option value=''>Seleccione un deporte</option>
                <option value='futbol'>Fútbol</option>
                <option value='natacion'>Natación</option>
                <option value='voley'>Patín Artistico</option>
              </select>
            </div>
    
            <div className='mb-4'>
              <label htmlFor='reserva--date' className='form-label'>Fecha</label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat='yyyy-MM-dd'
                className='form-control'
              />
            </div>
    
            <div className='mb-4'>
              <label htmlFor='startTime' className='form-label'>Horario de inicio</label>
              <TimePicker
                onChange={(time) => handleTimeChange('startTime', time)}
                value={formData.startTime}
                className='form-control'
              />
            </div>
    
            <div className='mb-4'>
              <label htmlFor='endTime' className='form-label'>Horario de fin</label>
              <TimePicker
                onChange={(time) => handleTimeChange('endTime', time)}
                value={formData.endTime}
                className='form-control'
              />
            </div>
    
            <button className='btn btn-primary btn-block my-4' type='submit'>
              Enviar
            </button>
          </form>
        </div>
      );
    };
    

export default ReservaForm;