import {useState} from "react"

export default function Formulario(){
    const[valor, setValor]=useState({
        nombre:"",
        apellido:""
    });
    const manejoentrada=(e)=>{
        setValor(
          {
             ...valor,
             [e.target.name]:e.target.value
          }


        )

    }
    const ver_envio=(e)=>{
        e.preventDefault();
        alert("Los datos recibidos nombre:"+valor.nombre+" y apellido"+valor.apellido);

    }
    return(
      <>
        <h1>Formulario </h1> 
        <form onSubmit={ver_envio}>
         <div>
            <label> Nombre:  
                <input type="text" 
                 placeholder="Nombre" 
                 onChange={manejoentrada}
                 name="nombre"/>
            </label>    
         </div>   
         <div>
            <label> Apellido:  
                <input type="text" 
                 placeholder="Apellido" 
                 onChange={manejoentrada}
                 name="apellido"/>
            </label>    
         </div>  
         <div>
            <button type="submit">enviar</button>    
         </div> 
         <ul>
             <li>{valor.nombre}</li>
             <li>{valor.apellido}</li>
         </ul>
        </form>  
      
      
      
      
      </>

    );
}