import  { useState } from 'react';

function FormularioChecklist() {
  // Estado inicial para almacenar los intereses seleccionados
  const [interesesSeleccionados, setInteresesSeleccionados] = useState([]);

  // Manejador para cambios en los checkboxes
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setInteresesSeleccionados(prev => {
      // Si el checkbox está marcado, agregamos su valor al estado
      if (checked) {
        return [...prev, value];
      } else {
        // Si ha sido desmarcado, lo removemos del estado
        return prev.filter(item => item !== value);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el envío por defecto del formulario
    alert('Intereses seleccionados: ' + interesesSeleccionados.join(', '));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Selecciona tus intereses</h3>
      <label>
        <input
          type="checkbox"
          value="Tecnología"
          checked={interesesSeleccionados.includes('Tecnología')}
          onChange={handleCheckboxChange}
        />
        Tecnología
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Deportes"
          checked={interesesSeleccionados.includes('Deportes')}
          onChange={handleCheckboxChange}
        />
        Deportes
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Arte"
          checked={interesesSeleccionados.includes('Arte')}
          onChange={handleCheckboxChange}
        />
        Arte
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioChecklist;
