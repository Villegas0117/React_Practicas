import {useState} from "react"
export default function Areatxt(){
 const[texto,setTexto]=useState("");

 const entradatxt=(e)=>{
    setTexto(e.target.value);
 }
 const handleSubmit = (event) => {
   event.preventDefault(); // Prevenir el comportamiento predeterminado de envío del formulario
   // Crear el mensaje de alerta con los intereses seleccionados y el comentario
   const mensaje = `Comentario: ${texto}`;
   alert(mensaje);
 };
 return(
    <div>
      <form onSubmit={handleSubmit}>
        <textarea 
           value={texto}
           onChange={entradatxt} 
           cols="100" 
           rows="10">
        </textarea>
        <p>Candidad de caracteres ingresados{texto.length}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>

 );
}