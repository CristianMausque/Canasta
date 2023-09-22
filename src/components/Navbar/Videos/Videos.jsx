import React from 'react'

const Videos = (props) => {
    return (
        <video src={props.source} id={props.id} controls></video>
    )
}

export default Videos