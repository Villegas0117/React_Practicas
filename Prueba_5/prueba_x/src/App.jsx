import React from 'react';
import './App.css';
import Cvideos from './components/cvideos';
import CAudio from './components/CAudio'; // Asegúrate de proporcionar la ruta correcta

function App() {
  return (
    <>
      <Cvideos />
      <br />
      <CAudio />
    </>
  );
}

export default App;
