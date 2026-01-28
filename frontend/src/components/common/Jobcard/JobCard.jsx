import React from 'react';
import '../Jobcard/JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-top">
        
        <span className="job-category-tag" style={{ backgroundColor: job.color }}>
           {job.icon} {job.category}
        </span>
      </div>
      
      <h3 className="job-title">{job.title}</h3>
      
      
      <div className="job-location-row">
        <div className="location-group">
          <span className="location-icon">📍</span>
          <span className="location-text">{job.location}</span>
        </div>
        <span className="divider">•</span>
        <div className="type-group">
          <span className="job-type-badge">{job.type}</span>
        </div>
      </div>

      <div className="job-card-footer">
        <div className="company-text">
          <p className="posted-on">{job.date} by</p>
          <p className="company-name">{job.company}</p>
        </div>
        <div className="company-logo-container">
          
           {job.logo ? (
             <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
           ) : (
             <div className="logo-placeholder">N/A</div>
           )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;