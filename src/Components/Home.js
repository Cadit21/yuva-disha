import React from "react";
import "./Home.css"; // Imports the CSS file for styling

function Home() {
  return (
    <>
      
      <div className="cont-1">
        <div className="box">
          <input
            placeholder="Job Title, Keywords, or Phrase"
            name="search_title"
            data-type="job"
            type="text"
          />
        </div>
        <div className="box">
          <input
            placeholder="City, State or ZIP"
            className="srch_autogeo_location"
            name="location"
            type="text"
            defaultValue="" // Use defaultValue instead of value
          />
        </div>
        <div className="box">
          <input
            type="text"
            autoComplete="off" // Correct attribute name to autoComplete
            tabIndex="" // If you need a tabindex, specify a number here
            placeholder="Select Sector"
          />
        </div>
      </div>
      
      {/* Section 2: Other Content */}
      <div className="cont-2">
        <p>Continue To <br/>Study & Learn <br/> New Skills </p>
        <div className="box-21">
          <div className="b-1">
            <h1>I AM AN ABHILASHI</h1>
            <p>Create your professional resume with online resume<br/>
            builder and start applying for best jobs.</p>
          </div>
          <div className="b-2">
            <h1>I AM A SAMARTH</h1>
            <p>Job posting and online resume database search service<br/>
            that helps you find best talent</p>
          </div>

          {/* A section for top sectors */}
          <div className="sec">
            
            <div className="sec2">
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
