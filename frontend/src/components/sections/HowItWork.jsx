import "./HowItWork.css"

const HowItWorks = () => {
  return (
    <div className="how-title-wrapper">
      <div className="how-it-works">
        <h2 className="how-title">How it works?</h2>

        <div className="how-cards">
          <div className="how-card">
            <h3>Create Account</h3>
            <p>Sign up and create your profile</p>
          </div>

          <div className="how-card">
            <h3>Search Jobs</h3>
            <p>Find jobs that match your skills</p>
          </div>

          <div className="how-card">
            <h3>Apply</h3>
            <p>Apply easily with one click</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
