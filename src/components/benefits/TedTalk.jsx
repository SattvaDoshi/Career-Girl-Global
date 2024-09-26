import React from 'react';

const Card = ({ title, description, thumbnailUrl, videoUrl }) => (
  <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block min-w-[300px]">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <img src={thumbnailUrl} alt="Thumbnail" className="w-full h-40 object-cover mb-4 rounded-lg" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* <p className="text-gray-700 mb-4">{description}</p> */}
    </div>
  </a>
);

const App = () => {
  const cards = [
    {
      title: 'The Psychology of Career Decisions by Sharon Belden Castonguay',
      description: 'Step-by-Step Guide: How to...',
      thumbnailUrl: 'https://img.youtube.com/vi/4e6KSaCxcHs/hqdefault.jpg',
      videoUrl: ' https://youtu.be/4e6KSaCxcHs?si=zPpuwXKFOuyS915h',
    },
    {
      title: ' Why We Have Too Few Women Leaders by Sheryl Sandberg',
      description: 'College Essay/Scholarship Essay...',
      thumbnailUrl: 'https://img.youtube.com/vi/18uDutylDa4/hqdefault.jpg',
      videoUrl: ' https://youtu.be/18uDutylDa4?si=MTfg9Tfgek_1Utmn',
    },
    {
      title: 'Three Questions to Unlock Your Authentic Career by Ashley Stahl',
      description: 'Scholarship Essays templates...',
      thumbnailUrl: 'https://img.youtube.com/vi/vMiSf7LpFQE/hqdefault.jpg',
      videoUrl: ' https://youtu.be/vMiSf7LpFQE?si=USOLEWsTy79-ntiI',
    },
    {
      title: ' Find Your Dream Job Without Ever Looking at Your Resume by Laura Berman Fortgang',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/wfNX1cHk-fE/hqdefault.jpg',
      videoUrl: 'https://youtu.be/wfNX1cHk-fE?si=pSdvXGSEFB2JdCBi',
    },
    {
      title: ' The Secret of Becoming Mentally Strong by Amy Morin',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/TFbv757kup4/hqdefault.jpg',
      videoUrl: 'https://youtu.be/TFbv757kup4?si=pQ7lYe7BNWcAPhJj',
    },
    {
      title: ' Six Habits That Will Make You More Confident by Emily Jaenson',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/IitIl2C3Iy8/hqdefault.jpg',
      videoUrl: ' https://youtu.be/IitIl2C3Iy8?si=U4w4Ige0Z3sCaH3P',
    },
    {
      title: 'The Science of Women Leadership by Alexis Kanda-Olmstead',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/FVzHBWoIGEw/hqdefault.jpg',
      videoUrl: ' https://youtu.be/FVzHBWoIGEw?si=pXpEYfVTqnsOOEPO',
    },    {
      title: ' How to Figure Out What You Really Want by Ashley Stahl',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/bRtBHF-WPpM/hqdefault.jpg',
      videoUrl: '  https://youtu.be/bRtBHF-WPpM?si=wFjdmpZnH9fwpjCq',
    },
  ];

  return (
    <div className="min-h-screen bg-pink-100 py-8">
      <div className="container mx-auto px-6">
      <h1 className="text-5xl font-bold text-center mt-8 mb-16 text-pink-700" style={{ fontFamily: 'Ultra' }}>TEDTALKS</h1>
        <div className="flex gap-8 overflow-x-auto py-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              thumbnailUrl={card.thumbnailUrl}
              videoUrl={card.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;