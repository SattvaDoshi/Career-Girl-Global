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
      videoUrl: 'https://youtu.be/4e6KSaCxcHs?si=zPpuwXKFOuyS915h',
    },
    {
      title: ' Why We Have Too Few Women Leaders by Sheryl Sandberg',
      description: 'College Essay/Scholarship Essay...',
      thumbnailUrl: 'https://img.youtube.com/vi/18uDutylDa4/hqdefault.jpg',
      videoUrl: 'https://youtu.be/18uDutylDa4?si=MTfg9Tfgek_1Utmn',
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
      videoUrl: 'https://youtu.be/IitIl2C3Iy8?si=U4w4Ige0Z3sCaH3P',
    },
    {
      title: 'The Science of Women Leadership by Alexis Kanda-Olmstead',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/FVzHBWoIGEw/hqdefault.jpg',
      videoUrl: 'https://youtu.be/FVzHBWoIGEw?si=pXpEYfVTqnsOOEPO',
    },  
  ];

  return (
    <div className="min-h-screen bg-pink-100 py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-7xl font-bold text-center mt-8 mb-16 text-pink-500" style={{ fontFamily: 'AbrilFatFace ' }}>TEDTALKS</h1>
        <div className="flex gap-8 overflow-x-auto py-8 custom-scrollbar">
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
      {/* Inline CSS for Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 12px;
          background-color: #f8d7da; /* Light pink for scrollbar track */
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #c51162; /* Bright pink for scrollbar handle */
          border-radius: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #c51162; /* Darker pink on hover */
        }
      `}</style>
    </div>
  );
}

export default App;
