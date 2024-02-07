import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap
import video1 from "../../Videos/video1.mp4";
import video2 from "../../Videos/video2.mp4";

function Cvideos() {
    return (
        <div className="container mt-5"> {/* Agregar clase container para centrar el contenido y margen superior */}
            <h1 className="text-center">Videos de YouTube</h1>

            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/-zAcRpVc5K0?si=hFvybpzOAKfCCKEh"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/YR1t_MUN8I4?si=VxQGlmHkAIt7QaLZ"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            <h1 className="text-center mt-5">Videos Locales</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">Video Fuente HTML5</h2>
                    <video controls src={video1} id="v1" className="w-100"></video>
                </div>
                <div className="col-md-6">
                    <h2 className="text-center">Video Fuente HTML5</h2>
                    <video controls src={video2} id="v2" className="w-100"></video>
                </div>
            </div>
        </div>
    );
}

export default Cvideos;
