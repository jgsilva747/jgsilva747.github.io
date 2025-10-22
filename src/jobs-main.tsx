import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/index.css';

// Import "control file" and "no jobs" component
import { jobPostings } from '@/data/jobPostings';
import NoJobsAvailable from '@/components/NoJobsAvailable';

// This is your main page layout
const JobsPage = () => {
  return (
    // Added styling to match your site
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto p-6 pt-24"> 

        <h1 className="text-4xl font-bold text-center mb-12">
          Current Job Openings
        </h1>

        {jobPostings.length > 0 ? (
          // If jobs exist, map them out
          <div className="space-y-8">
            {jobPostings.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          // 2. If no jobs, show your new component
          <NoJobsAvailable />
        )}

      </div>
    </div>
  );
};


const JobCard = ({ job }: { job: (typeof jobPostings)[0] }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6">
      {/* 1. Render the Job Title */}
      <h2 className="text-2xl font-semibold text-white mb-2">{job.title}</h2>
      
      {/* 2. Render the Meta Info */}
      <p className="text-white whitespace-pre-line mb-6">
        {job.meta}
      </p>

      {/* 3. Loop over the sections */}
      <div className="space-y-6">
        {job.sections.map((section) => (
          <div key={section.title}>
            {/* 4. Render the CAPTION with larger text */}
            <h3 className="text-xl font-semibold text-white mb-3">
              {section.title}
            </h3>
            {/* 5. Render the section content */}
            <p className="text-white whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* 6. Render the Apply Button */}
      {job.applyLink && (
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          // Added margin-top to space it from the content
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 mt-8"
        >
          Apply Now
        </a>
      )}
    </div>
  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JobsPage />
  </React.StrictMode>
);