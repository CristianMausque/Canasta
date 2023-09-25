import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import YouTube from 'react-youtube';
import './WorksPage.css'

class WorksPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            videos: ['msCXW6AJUEk', "mJPNDGiLaBA", 'sPZIYGpfpgE'],
            players: [], // Reemplaza esto con los ID de tus videos de YouTube
        };
    }

    handleSelect(selectedIndex, e) {
        const { players, index } = this.state;
        if (players[index]) {
            players[index].stopVideo();
        }
        this.setState({ index: selectedIndex });
        if (players[selectedIndex]) {
            players[selectedIndex].playVideo();
        }
    }

    onReady(i, event) {
        this.setState(prevState => {
            const players = [...prevState.players];
            players[i] = event.target;
            return { players };
        });
    }

    render() {
        const { index, videos } = this.state;

        return (
            <Carousel activeIndex={index} onSelect={this.handleSelect}>
                {videos.map((embedUrl, i) => {
                    const videoId = embedUrl.split('/').pop();
                    return (
                        <Carousel.Item key={i}>
                            <YouTube videoId={videoId} opts={{
                                playerVars: {
                                    autoplay: i === index ? 1 : 0,
                                    rel: 0, // Evita que se muestren vídeos relacionados al final
                                    modestbranding: 1,
                                    controls: 0
                                }
                            }} onReady={this.onReady.bind(this, i)} />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        );
    }
}

export default WorksPage;
