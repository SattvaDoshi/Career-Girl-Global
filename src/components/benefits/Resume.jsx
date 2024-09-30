import React from 'react';
import headPlan from '../images/head-plan.jpeg'; 
import action from '../images/action-words.jpeg'; 
import pink from '../images/pink-cover.jpeg'; 

const ResumeCard = ({ title, description, pdfUrl, imageUrl }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
    <img src={imageUrl} alt="Resume Template" className="w-full h-48 object-cover mb-4 rounded-lg" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4 text-center">{description}</p>
    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
      Download PDF
    </a>
  </div>
);

const App = () => {
  const resumes = [
    {
      title: 'Harvard Resume and cover letters',
      description: 'Enhance your job application with Harvards comprehensive Resume and Cover Letter Guide',
      pdfUrl: 'https://drive.google.com/file/d/1WeeEcSxBnWPhvsUsGKVFb2FZGkWGbH8y/view?usp=sharing',
      imageUrl: headPlan,
    },
    {
      title: 'Career Girl global resume template',
      description: 'Don’t have a resume? Check out our free template tailored to help you launch your dream career.',
      pdfUrl: 'https://drive.google.com/file/d/1JCzPttbugoKXo5fkvpI6l5T35vLRiCPN/view?usp=sharing',
      imageUrl: pink,
    },
    {
      title: 'Harvard Action verbs',
      description: 'Boost your resume with these Harvard-approved action verbs. Check out!',
      pdfUrl: 'https://drive.google.com/file/d/17vIv4kPfAnQJ705PB_ijIBHqE6mAPPcO/view?usp=sharing',
      imageUrl: action,
    },
  ];

  return (
    <div className="min-h-screen bg-pink-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-16 mt-10 text-pink-500" style={{ fontFamily: 'Abril FatFace' }}>RESUME TEMPLATES</h1>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {resumes.map((resume, index) => (
            <ResumeCard
              key={index}
              title={resume.title}
              description={resume.description}
              pdfUrl={resume.pdfUrl}
              imageUrl={resume.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

