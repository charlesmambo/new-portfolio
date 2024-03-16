import React, { useRef, useEffect, useState } from 'react';
import styles from './Phone.css'
import { AiOutlineSmallDash } from "react-icons/ai";
import { MdOutlineTexture } from "react-icons/md";
import { PiGridNineThin } from "react-icons/pi";
import videoFile from '../../assets/budget.mp4';
import videoFile2 from '../../assets/music.mp4';
import videoFile3 from '../../assets/landingpage.mp4';


const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  margin: 0,      
  padding: 0 
};


const videoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: '0.2rem'
};

const playButtonStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
};

const Phone = () => {

//Video Autoplay function 
const videoRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const handlePlay = () => {
  const videoElement = videoRef.current;
  if (videoElement) {
    videoElement.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.error('Autoplay was prevented:', error);
      });
  }
};

const handlePause = () => {
  const videoElement = videoRef.current;
  if (videoElement) {
    videoElement.pause();
    setIsPlaying(false);
  }
};



  return (
    <div className='box'>
       <div className="speaker">
          <i><AiOutlineSmallDash /></i>
          <i><AiOutlineSmallDash /></i>
          <i><AiOutlineSmallDash /></i>
          <i><AiOutlineSmallDash /></i>
        </div>
      <div className="box2">
       <div className="box3">

    {/* FIRST VIDEO  */}
    <a href="https://slugsixmusicstream.netlify.app/" target="_blank">
       <div style={containerStyle}>
         <video
          ref={videoRef}
            style={videoStyle}
           muted
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
      >
        <source src={videoFile2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div
          style={playButtonStyle}
          onClick={handlePlay}
        >
          {/* You can customize the play button icon here */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
    </a>

      {/* SECOND  VIDEO  */}
      <a href="https://slugsixmusicstream.netlify.app/" target="_blank">
       <div style={containerStyle}>
         <video
          ref={videoRef}
            style={videoStyle}
           muted
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div
          style={playButtonStyle}
          onClick={handlePlay}
        >
          {/* You can customize the play button icon here */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
    </a>

     {/* THIRD VIDEO  */}
    <a href="https://papaya-sherbet-f1eac9.netlify.app/" target="_blank">
       <div style={containerStyle}>
         <video
          ref={videoRef}
            style={videoStyle}
           muted
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
      >
        <source src={videoFile3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div
          style={playButtonStyle}
          onClick={handlePlay}
        >
          {/* You can customize the play button icon here */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
    </a>
       </div>
      </div>
      <div className="button"></div>
    </div>
  )
}

export default Phone