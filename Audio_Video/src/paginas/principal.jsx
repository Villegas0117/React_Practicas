import "./principalcss/estilos.css"
import Cabecera from "../componentes/cabecera";
import Audio from "../componentes/audio";
import Video1 from '../componentes/video.fuente';
import VideoYouTube from "../componentes/videoyoutube";
function Principal() {
    return (
      <div id="App">
        <section id="titulo">
            <Cabecera />
        </section>
        <section id="audios">
             <Audio/>
        </section>
        <article id="videos1" >
               <Video1/>
        </article> 
        <aside id="videos2">
             <VideoYouTube/>
        </aside>
        
      </div>
    );
  }
  
  export default Principal;