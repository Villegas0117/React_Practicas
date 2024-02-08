import {useState} from "react"

export default function Radio(){
  const[estudios,setEstudios]=useState("");  
  const manejoradio=(e)=>{
    setEstudios(e.target.value);
    
  }
 const handleSubmit = (event) => {
    event.preventDefault();
    const mensaje = `Opción seleccionada: ${estudios}`;
    alert(mensaje);
  };
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <div>
      <input type="radio" value="primaria" 
           checked={estudios==="primaria"} 
            onChange={manejoradio}/> primaria
      </div>
       <div>
       <input type="radio" value="secundaria" checked={estudios==="secundaria"} 
        onChange={manejoradio}/> Secundaria
       </div>
       <div>
       <input type="radio" value="bachillerato" checked={estudios==="bachillerato"} 
        onChange={manejoradio}/> bacchillerato
       </div>
        <div>
        <input type="radio" value="universitario" checked={estudios==="universitario"} 
        onChange={manejoradio}/> Universitario
        </div>
        <p>El estudio seleccionado es {estudios}</p>
        <button type="submit">Enviar</button>
        </form>
    </div>

  );


}