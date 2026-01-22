import React from 'react';

function Page2() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src="https://via.placeholder.com/300x400"
              alt="Profile"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Content */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">Self Introduction</h2>
            <p className="text-dark">
              I am a motivated B.E graduate and a passionate Java Developer.
              With a strong foundation in core programming and problem-solving,
              I am currently exploring the intersections of Cloud Computing and AI/ML.
              I am a creative thinker who enjoys blending technical logic with
              visual storytelling.
            </p>

            <h4 className="fw-semibold mt-4">Education</h4>
            <div className="border-start border-4 border-primary ps-3 my-2">
              <p className="fw-bold mb-1">Bachelor of Technology (B.Tech)</p>
              <p className="mb-1">Graduated: 2025</p>
              <small className="text-muted">
                Focused on Data Structures, OS, and Java Development.
              </small>
            </div>

            <h4 className="fw-semibold mt-4">Skills & Interests</h4>
            <div className="d-flex flex-wrap gap-2">
              {['Java', 'Cloud Computing', 'AI/ML', 'DevOps', 'Video Editing'].map(skill => (
                <span key={skill} className="badge bg-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page2;
