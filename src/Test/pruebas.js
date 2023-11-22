import React, { useState } from 'react';

const FormularioUsuario = () => {
  // Estado para almacenar los valores del formulario como un objeto
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    correo: ''
  });

  // Manejador de cambios para actualizar el estado del usuario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario(prevUsuario => ({
      ...prevUsuario,
      [name]: value
    }));
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o realizar operaciones locales.
    console.log('Usuario:', usuario);

    // Puedes restablecer el estado después del envío si es necesario
    setUsuario({
      nombre: '',
      apellido: '',
      correo: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={usuario.nombre}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={usuario.apellido}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={usuario.correo}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioUsuario;
