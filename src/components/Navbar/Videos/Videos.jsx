import React from 'react'

const Videos = (props) => {
    return (
        <iframe
            width="560"  // Ancho del iframe (ajusta según tus necesidades)
            height="315" // Alto del iframe (ajusta según tus necesidades)
            src={props.embedCode} // Prop que contiene el código de inserción de YouTube
            title="Video de YouTube"
            frameBorder="0"
            allowFullScreen
        ></iframe>
    )
}

export default Videos