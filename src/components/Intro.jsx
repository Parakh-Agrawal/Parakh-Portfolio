import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { webentry } from '../assets'; // Adjust the path if needed
import App from '../App';
import { logo } from '../assets';

const VideoIntro = ({ videoSrc, onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      onVideoEnd();
      setProp('hidden');
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [onVideoEnd]);

  const handleStartVideo = async () => {
    const videoElement = videoRef.current;
    try {
      videoElement.muted = false; // Unmute the video
      videoElement.volume = 1; // Set volume to maximum
      await videoElement.play();
    } catch (error) {
      console.error('Error attempting to play the video:', error);
    }
    setHButton('hidden');
  };

  const [prop, setProp] = useState('');
  const [hButton, setHButton] = useState('');

  return (
    <div className={`${prop} video-container`} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }}>
      <video
        ref={videoRef}
        src={videoSrc}
        controls={false}
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
        }}
        onContextMenu={(e) => e.preventDefault()} // Prevent right-click context menu
      />
      <button
        onClick={handleStartVideo}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 20px',
          fontSize: '25px',
          zIndex: 1001,
          fontWeight: 'bold',
          color:'#443973',
        }}
        className={`${hButton}`}
      ><img src={logo} alt="logo" />
        Click To Enter
      </button>
    </div>
  );
};

const Intro = () => {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [showApp, setShowApp] = useState(false);

  const handleVideoEnd = () => {
    setVideoPlayed(true);
  };

  useEffect(() => {
    if (videoPlayed) {
      // Wait a bit before showing App to avoid flickering
      setTimeout(() => {
        setShowApp(true);
      }, 100); // Adjust delay as needed
    }
  }, [videoPlayed]);

  return (
    <div className="Intro">
      <div>
        {!showApp && <VideoIntro videoSrc={webentry} onVideoEnd={handleVideoEnd} />}
      </div>
      {showApp && <App />}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Intro />);

export default Intro;
