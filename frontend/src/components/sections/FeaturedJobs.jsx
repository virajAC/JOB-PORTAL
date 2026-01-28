import React from 'react';
import './FeaturedJobs.css';
import JobCard from '../common/Jobcard/JobCard';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      category: "Finance",
      title: "Financial Analyst",
      location: "Itahari, Sunsari",
      type: "Full Time",
      date: "June 8, 2027",
      company: "DELTA",
      logo: "⍙",
      color: "#e8f0fe"
    },
    {
      id: 2,
      category: "Software Engineering",
      title: "Fullstack Web Developer",
      location: "Biratnagar",
      type: "Full Time",
      date: "June 8, 2026",
      company: "Rato Gurash",
      logo: "",
      color: "#e1f5fe"
    },
    {
      id: 3,
      category: "Human Resources",
      title: "Human Resources Coordinator",
      location: "Kathmandu",
      type: "Full Time",
      date: "June 8, 2026",
      company: "E-NGO",
      logo: "",
      color: "#e3f2fd"
    },
    {
      id: 4,
      category: "Business Development",
      title: "Technical Writer",
      location: "Biratnagar",
      type: "Remote",
      date: "June 7, 2026",
      company: "VibrantVista",
      logo: "",
      color: "#fbe9e7"
    }
  ];

  return (
    <section className="featured-jobs-section">
      <div className="featured-jobs-inner">
        <div className="featured-header">
          <h2>Featured Job Offers</h2>
          <p>Search your career opportunity through 1200 jobs</p>
        </div>

        <div className="jobs-grid">
          {/* added the mapping here to make jobcards appear here in this grid */}
          {jobs.map((singleJob) => (
            <JobCard key={singleJob.id} job={singleJob} />
          ))}
        </div>


         <div className='job-offer-button'>All Job Offers</div>
      </div>
    </section>
  );
};

export default FeaturedJobs;