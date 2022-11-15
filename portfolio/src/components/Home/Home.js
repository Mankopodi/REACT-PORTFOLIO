import React, { Component } from "react";
import "./Home.css";
import profile from "../../assets/image1.jpeg";

export class Home extends Component {
  render() {
    function scroll() {
      document.getElementById('about').scrollIntoView({behavior:'smooth', block:'start'})
    }

    return (
      <section>
        <div className="main">
          <div
            className="hero min-h-screen b"
            style={{
              backgroundImage: `url(${profile})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px 0px",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">
                  Maloma Mankopodi Kgopotso
                </h1>
                <p className="mb-5">
                  I'm a Full Stack Developer, UI/UX Designer, Network Engineer.{" "}
                </p>
                <button
                  className="btn btn-primary"
                  href="#about"
                onClick={() => scroll()}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
