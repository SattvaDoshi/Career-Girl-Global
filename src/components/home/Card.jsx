import React from 'react';

function Card({ item }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-pink-500 mb-2 ">{item.title}</h2>
      {/* <p className="text-gray-700 mb-2">{item.date}</p> */}
      <p className="text-gray-600 mb-2">{item.description}</p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Visit source
      </a>
    </div>
  );
}

export default Card;
