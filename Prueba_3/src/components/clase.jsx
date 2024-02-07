import {Component} from 'react';
import './estilos.css';

class Cclase extends Component{
    constructor (props){
        super(props);
    }
    //Metodo
    render(){
        return (
            //Aqui espera las etiquetas html <></>
            <div id='cclase'>
                <h1>Este es un componente clase</h1>
                <ol>
                    <li>Componente tradicional</li>
                    <li>Componente con estado</li>
                </ol>
            </div>
        );
    }
}

export default Cclase;