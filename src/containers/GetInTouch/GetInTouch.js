import React from "react";
import "./GetInTouch.css";

class GetInTouch extends React.Component {
  render() {
    return (
      <section id="GetInTouchSection ">
        <div className="container text-center mt-5">
          <h1>Get In Touch</h1>
          <p>
            Problems trying to resolve the conflict between<br></br> the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="mycard2">
                <div className="image mt-5">
                  <img src="Vector (3).png" alt="" />
                </div>
                <div>
                  <a href="#">georgia.young@example.com</a>
                  <a href="#">georgia.young@ple.com</a>
                  <p>Get Support</p>
                  <button className="btn1 btn btn-light">Submit Request</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="mycard3">
                <div className="image mt-5">
                  <img src="Vector (3).png" alt="" />
                </div>
                <div>
                  <a href="#">georgia.young@example.com</a>
                  <a href="#">georgia.young@ple.com</a>
                  <p>Get Support</p>
                  <button className="btn2 btn">Submit Request</button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="mycard4">
                <div className="image mt-5">
                  <img src="Vector (3).png" alt="" />
                </div>
                <div>
                  <a href="#">georgia.young@example.com</a>
                  <a href="#">georgia.young@ple.com</a>
                  <p>Get Support</p>
                  <button className="btn1 btn btn-light">Submit Request</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GetInTouch;
