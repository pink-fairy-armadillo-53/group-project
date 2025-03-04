// display compoenent that renders an array of top movies (say top 10?)

import React, { useState, useEffect } from 'react';

const Hero = ({ films }) => {
  return (
 
      <div className="video_container">
      <video autoPlay muted loop id="heroVideo">
        <source src="https://imdb-video.media-imdb.com/vi3565864217/1434659607842-pgv4ql-1669124569701.mp4?Expires=1741053681&Signature=Lt5rwZxmPI2b6~K~xR5kOKAKkQpPnkvFfJ8S9pb5cpH2~nfgVWPvfQlrdTYDbgpKDPLnwTvf6t9-VZfD8UM-rG~FKKJas22~mHtiHCaCYWzuJhnmKs~hJ9ZsckjduMdsW-O1Hm60-WsAUXZXiS2712XkNi4K227KC60sa~YaPB3KTPiPyq7RHjsOCcudZJf2ljLgX29n8Pu-Z4v9f2q9UAldG7i60ensqBsL8VH8l~A3XeHV5b2q9iFDXgE~Qcz2bzIW3cNAogcxrXYlpmEkhRdJq91xKlwEWjLPtY1DjhPnS7uFpU9NPRJuYCZLIVCGyhg7peF0dBvHeeWvdIhEcQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" type="video/mp4"></source>
      </video>
      <div className="video_overlay">
      <div className="video_content">
      <h2>Avatar </h2>
      <p>THE WAY OF WATER</p>
      </div>
      </div>
      </div>
    
  );
};

export default Hero;
