import "./css/video.css"
import video from "../audioyvideo/Road - 84970.mp4"
function Video1(){
    return( 
     
            <section id="video1">
             <h1>Video Fuente HTML5</h1>
                   <video controls  src={video}   id="v1" ></video>
           </section>   
           
        
    );
}
export default Video1;