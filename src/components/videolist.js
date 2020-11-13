import React from 'react'
import VideoItem from './videositem'

const VideosList=props=>{

const renderedList=  props.videos.map((video)=>{
        return <VideoItem onVideoSelect={props.onVideoSelect} video={video} />

    })
    return<div className="ui relaxed divided list" >{renderedList}</div>
}
export default VideosList