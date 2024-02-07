import "./css/audio1.css"
import Song from "../audioyvideo/Energetic pop.mp3"
function Audio(){
    return(
     <section id="audio1">
       <h1>Audio  HTML5</h1>
       
          <audio id="a1" src={Song} controls muted loop  ></audio>
      </section>
       
       
    );
}
export default Audio;