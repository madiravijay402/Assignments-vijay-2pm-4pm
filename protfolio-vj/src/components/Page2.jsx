import React from 'react';

function Page2() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
        
        <div className="w-full md:w-1/3">
          <img 
            src="https://via.placeholder.com/300x400" 
            alt="Profile" 
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Self Introduction</h2>
          <p className="text-black-600 leading-relaxed mb-6">
            I am a motivated B.E graduate and a passionate Java Developer. 
            With a strong foundation in core programming and problem-solving, 
            I am currently exploring the intersections of Cloud Computing and AI/ML. 
            I am a creative thinker who enjoys blending technical logic with 
            visual storytelling.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <p className="font-bold text-gray-700">Bachelor of Technology (B.Tech)</p>
            <p className="text-gray-600">Graduated: 2025</p>
            <p className="text-sm text-gray-500 italic">Focused on Data Structures, OS, and Java Development.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills & Interests</h3>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Cloud Computing', 'AI/ML', 'DevOps', 'Video Editing'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page2;