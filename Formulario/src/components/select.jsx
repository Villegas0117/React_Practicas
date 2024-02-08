import {useState} from "react"

export default function Eleccion(){
 const[opcion, setOpcion]=useState("melon")

 const manejoOpcion=(e)=>{
    setOpcion(e.target.value);
 }
 const enviar=(e)=>{
    e.preventDefault();
    alert("El sabor elegido es: "+opcion);

 }
 return(
  <form onSubmit={enviar}>
       <label> Elije un sabor 
           <select value={opcion} onChange={manejoOpcion}>
             <option value="melon">Melon</option>
             <option value="limon">Limon</option>
             <option value="sandia">Sandia</option>
             <option value="mango">Mango</option>
           </select>
       </label>
       <button type="submit">Enviar</button>
  </form>

 );



}