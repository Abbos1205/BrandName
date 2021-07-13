import React from "react";
import "./footer.css";

class footer extends React.Component {
  render() {
    return (
      <section id="footerSection ">
        <div className="container text-center mt-5 footercontainer">
          <div className="d-flex justify-content-between">
            <div>
              <img src="" alt="BrandName" />
            </div>
            <div>
              <img src="Vector (4).png" alt="" />
              <img src="Vector (5).png" alt="" />
              <img src="Vector (6).png" alt="" />
            </div>
          </div>
          <div className="row">
              <div className="col-lg-12 col-ms-4">
              <div className="d-flex ">
            <div className="footertext">
              <ul>
                <li className="fw-bold">Company Info</li>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footertext">
              <ul>
                <li className="fw-bold">Legal</li>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footertext">
              <ul>
                <li className="fw-bold">Features</li>
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div className="footertext">
              <ul>
                <li className="fw-bold">Resources</li>
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
            <div className="footertext">
              <ul>
                <li className="fw-bold">Get In Touch</li>
              </ul>
              <input type="emnil" placeholder="Your Email"  className="form-control"/>
              <p>Lorem impsum dolor amit</p>
            </div>
          </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default footer;
