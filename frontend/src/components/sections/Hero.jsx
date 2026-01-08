import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-reactangle"></div>

      <div className="hero-text">
        <h2>
          Find the perfect <br /> job for you
        </h2>
        <h3 className="hero-subtext">
          Search your career oportunity throughs millions jobs
        </h3>
      </div>

      <input className="searchbox" type="text" placeholder="Search here..." />

      <div className="subhero">
        <h2>Popular Searches</h2>
        <div className="search-tags">
          <span className="tag">writer</span>
          <span className="tag">Frontend</span>
          <span className="tag">Designer</span>
          <span className="tag">Backend</span>
         　　　 <div className="break"></div>
                      
                    <span className="tag">Frontend</span> 
                    <span className="tag">Frontend</span>
                    <span className="tag">Frontend</span>
                    <span className="tag">Frontend</span>
                    <span className="tag">Frontend</span>
                    <span className="tag">Frontend</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
