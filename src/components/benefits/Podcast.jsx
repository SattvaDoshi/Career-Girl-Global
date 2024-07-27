import React from 'react';
import work from '../images/women-at-work.png'; 
import classy from '../images/classy-girl.png'; 
import switchImage from '../images/switch-pivot.png'; 
import career from '../images/career-talk.png'; 
import move from '../images/movers.png'; 
import nine from '../images/nine-to-five.png';

const Card = ({ title, description, thumbnailUrl, podcastUrl }) => (
  <a href={podcastUrl} target="_blank" rel="noopener noreferrer" className="block min-w-[300px]">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <img src={thumbnailUrl} alt="Podcast Cover Art" className="w-full h-40 object-cover mb-4 rounded-lg" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* <p className="text-gray-700 mb-4">{description}</p> */}
    </div>
  </a>
);

const App = () => {
  const cards = [
    {
      title: 'Women at Work',
      description: 'Step-by-Step Guide: How to...',
      thumbnailUrl: work,
      podcastUrl: 'https://open.spotify.com/show/2U2ylGfkalpvt9XXWjRFHW?si=JveJhmJIQbmL7kzUkdEJfw',
    },
    {
      title: 'The Classy Career Girl',
      description: 'College Essay/Scholarship Essay...',
      thumbnailUrl: classy,
      podcastUrl: 'https://open.spotify.com/show/2G7aufWFrfTXBTbR2zmfUp?si=2qwUDjNUT7m5xZCNVFbSoQ',
    },
    {
      title: 'Switch, Pivot, or Quit',
      description: 'Scholarship Essays templates...',
      thumbnailUrl: switchImage,
      podcastUrl: 'https://open.spotify.com/show/1RfzImbugmAHrSeE5g9hNW?si=FkLM410FTaC5R33YLcx7Ew',
    },
    {
      title: 'Career Talk: Learn- Grow- Thrive',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: career,
      podcastUrl: 'https://open.spotify.com/show/6sY90mdRx78qRAQKV8xEJe?si=mSvu6Gj8ROyY00WmZCd5kQ',
    },
    {
      title: 'The Lively Show',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      podcastUrl: 'https://open.spotify.com/show/6rpypdj7FZJ5Zij90bE74c?si=vrPcMtn5TJ-Dw_iAaFdz0Q',
    },
    {
      title: 'Movers and Shakers',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: move,
      podcastUrl: 'https://open.spotify.com/show/4dipKcMG0IocnGsdRmB2nJ?si=Br7RUHIdT2SIJFwdvyLnQA',
    },
    {
      description: '9 to 5ish',
      thumbnailUrl: nine,
      podcastUrl: 'https://open.spotify.com/show/4enIO7fwakdsLYh7q9YMDz?si=GSewPNAqRmOJXsHVR564bw',
    },
  ];

  return (
    <div className="min-h-screen bg-pink-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mt-8 mb-16 text-pink-700">PODCASTS</h1>
        <div className="flex gap-8 overflow-x-auto py-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              thumbnailUrl={card.thumbnailUrl}
              podcastUrl={card.podcastUrl}
            />
          ))}
        </div>
      </div>  
    </div>
  );
}

export default App;
