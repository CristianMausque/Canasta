import React, { useEffect } from 'react';
import Videos from '../../components/Navbar/Videos/Videos';

const VIDEOS = [
    {
        videoId: 'msCXW6AJUEk',
        id: 1
    },
    {
        videoId: 'mJPNDGiLaBA',
        id: 2
    },
    // ... (otros videos)
];

const WorksPage = () => {
    useEffect(() => {
        // Cargar la API de YouTube
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;

        script.onload = () => {
            // API de YouTube cargada, puedes configurar y controlar los videos aquí

            // Configurar los parámetros para todos los videos
            const playerVars = {
                controls: 0,
                rel: 0,
                modestbranding: 1,
                autoplay: 0,
                mute: 1, // Sonido desactivado
            };

            // Crear los reproductores de video para cada video en VIDEOS
            VIDEOS.forEach((video) => {
                new YT.Player(`video-${video.id}`, {
                    videoId: video.videoId,
                    playerVars: playerVars,
                    events: {
                        'onReady': (event) => {
                            // Agrega el evento de reproducción al pasar el cursor sobre el video
                            event.target.addEventListener('mouseenter', () => {
                                event.target.playVideo();
                            });

                            // Detiene el video cuando el cursor sale del área del video
                            event.target.addEventListener('mouseleave', () => {
                                event.target.pauseVideo();
                            });
                        },
                    },
                });
            });
        };

        document.head.appendChild(script);

        return () => {
            // Limpiar el script cuando el componente se desmonte
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1>Lista de Videos</h1>
            <div className="videos-list">
                {VIDEOS.map((video, index) => (
                    <div key={index} id={`video-${video.id}`} />
                ))}
            </div>
        </div>
    );
};

export default WorksPage;