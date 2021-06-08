import React, {useRef, useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, channel, description, song, likes, messages,shares}) {
    const [playing, setplaying] = useState(false)
    const videoRef = useRef(null);

    const handleVideoPress = () =>{
        // if video is playing
        //stop it...
        if (playing) {
            videoRef.current.pause();
            setplaying(false);
        } else{
            videoRef.current.play();
            setplaying(true);
        }
            

        //else if not playing
        //play it
    };

    return (
        <div className="video">
            <video 
                onClick={handleVideoPress}
                className="video__player" loop  ref={videoRef}
                src={url}></video>
             
             
            {/* footer */}
            < VideoFooter channel={channel} description={description} song={song} />

            {/* side bar */}
            <VideoSidebar likes={likes} shares={shares} messages = {messages}/>
        </div>
    );
}

export default Video
