import React from 'react'
import VideoItem from './videositem'

const VideosList=props=>{

const renderedList=  props.videos.map((video)=>{
        return <VideoItem video={video} />

    })
    return<div>{renderedList}</div>
}
export default VideosList