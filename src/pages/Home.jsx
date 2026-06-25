import React, { useEffect, useState } from 'react';
import videoData from '../data/videos.json';
const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/videos.json')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div>
      <h1>منصة تعليمية</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <h2>{video.title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${new URL(video.url).searchParams.get('v')}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
