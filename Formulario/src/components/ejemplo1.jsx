import {useState} from 'react'

export default function Componente(){
const[cont,setCont]=useState(0);
const[cadena,setCad]=useState("hola");
const[boolea,setBoolea]=useState(false);
const[obj, setObj]=useState(
    {
        entero:0,
        texto:"ejemplo"
    }
)
return(
   <>
      <div>
          <h3>El valor de contador {cont}</h3>
          <button onClick={()=>setCont(cont+1)}>Sumar</button>
      </div>
      <div>
          <h3>El valor de la cadena es {cadena}</h3>
          <button onClick={()=>setCad(cadena+"mundo")}>Saludo</button>
      </div>
      <div>
          <h3>El valor booleano es {boolea}</h3>
          <button onClick={()=>setBoolea(boolea? "true":"false")}>Saludo</button>
      </div>
      <div>
          <h3>El valor del objeto {obj.entero} y {obj.texto}</h3>
          <button onClick={()=>setObj({
              ...obj,
              entero:obj.entero-1,
              texto:obj.texto="adios"
          })}>Saludo</button>
      </div>
   </>

);
}
