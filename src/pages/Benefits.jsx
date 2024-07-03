import React from 'react'

const Card = ({ title, description, thumbnailUrl, videoUrl }) => (
  <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block min-w-[300px]">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <img src={thumbnailUrl} alt="Thumbnail" className="w-full h-40 object-cover mb-4 rounded-lg" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  </a>
);

const Benefits = () => {
  const cards = [
    {
      title: 'Resume templates',
      description: 'Step-by-Step Guide: How to...',
      thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      title: 'Interview preparation',
      description: 'College Essay/Scholarship Essay...',
      thumbnailUrl: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
    },
    {
      title: 'Podcasts and TED Talks',
      description: 'Scholarship Essays templates...',
      thumbnailUrl: 'https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    },
    {
      title: 'Ask for a Letter of Recommendation Template',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/e-ORhEE9VVg/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=e-ORhEE9VVg',
    },
    {
      title: 'Ask for a Letter of Recommendation Template',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/e-ORhEE9VVg/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=e-ORhEE9VVg',
    },
    {
      title: 'Ask for a Letter of Recommendation Template',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/e-ORhEE9VVg/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=e-ORhEE9VVg',
    },
    {
      title: 'Ask for a Letter of Recommendation Template',
      description: 'Letter-of-recommendation...',
      thumbnailUrl: 'https://img.youtube.com/vi/e-ORhEE9VVg/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=e-ORhEE9VVg',
    },
  ];

  return (
    <div className="min-h-screen bg-pink-100 py-8">
      <div className="container mx-auto px-4">
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

export default Benefits