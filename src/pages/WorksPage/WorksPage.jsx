import React from 'react'
import Videos from '../../components/Navbar/Videos/Videos'

const VIDEOS = [
    {
        embedCode: 'https://www.youtube.com/watch?v=msCXW6AJUEk',
        id: 1
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 1
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 1
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 1
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 1
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 1
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 1
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 1
    }
]

const WorksPage = () => {
    return (
        <div>
            <h1>Lista de Videos</h1>
            <div className="videos-list">
                {VIDEOS.map((video, index) => (
                    <Videos key={index} embedCode={video.embedCode} id={video.id} />
                ))}
            </div>
        </div>
    )
}

export default WorksPage