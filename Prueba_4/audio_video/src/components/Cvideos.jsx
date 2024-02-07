function Cvideos() {
    return (
        <div id="Videos">
            <h1>Videos de YouTube</h1>

            <section id="videoYT">
                <iframe
                    width="300"
                    height="215"
                    src="https://www.youtube.com/embed/-zAcRpVc5K0?si=hFvybpzOAKfCCKEh"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </section>

            <section>
                <iframe
                    width="300"
                    height="215"
                    src="https://www.youtube.com/embed/YR1t_MUN8I4?si=VxQGlmHkAIt7QaLZ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </section>

            <h1>Videos Locales</h1>
            <section id="video1">
                <h1>Video Fuente HTML5</h1>
                <video controls src={video1} id="v1"></video>
            </section>
            <section id="video2">
                <h1>Video Fuente HTML5</h1>
                <video controls src={video2} id="v2"></video>
            </section>
        </div>
    );
}

export default Cvideos;
