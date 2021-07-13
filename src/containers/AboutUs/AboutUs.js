import React from "react";
import "./AboutUs.css";

class AboutUs extends React.Component {
  render() {
    return (
      <section id="aboutUsSection">
        <div className="container  text-center ">
          <h1>About Us</h1>
          <p>
            Problems trying to resolve the conflict between<br></br> the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="row mt-5">
            <div className="col-sm-12 col col-lg-6">
              <img src="video.jpg" className="w-100" alt="" />
            </div>
            <div className="p-5 col-sm-12 col-lg-6">
              <h1 className="text-start ">Most trusted in our field</h1>
              <p className="text-start">
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
              </p>
              <div className="d-flex mt-5">
                <img src="Vector.png" className="vector" alt="wfqwf" />
                <div>
                <p className="text1 ms-2 text-sm-center">
                  the quick fox jumps over the lazy dog </p>
                <p className="text-small text-start w-60">Things on a very small scale ...</p>
                </div>
              </div>
              <div className="d-flex mt-5">
                <img src="Vector (2).png" className="vector" alt="wfqwf" />
                <div>
                <p className="text1 ms-2 text-sm-center">
                  the quick fox jumps over the lazy dog </p>
                <p className="text-small text-start w-60">Things on a very small scale ...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
