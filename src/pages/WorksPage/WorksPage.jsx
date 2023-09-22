import React from 'react'
import Videos from '../../components/Navbar/Videos/Videos'

const VIDEOS = [
    {
        embedCode: 'https://www.youtube.com/watch?v=msCXW6AJUEk',
        id: 1
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 2
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 3
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 4
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 5
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 6
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 7
    },
    {
        embedCode: 'https://www.youtube.com/watch?v=mJPNDGiLaBA',
        id: 8
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