import React from "react";
import "./Home.css";
import profile from "../../assets/images/profile.jpeg";

function Home() {
    return (
 
        <div  id='home' className="main">
          <div
            className="hero min-h-screen b"
            style={{
              backgroundImage: `url(${profile})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">
                  Maloma Mankopodi Kgopotso
                </h1>
                <p className="mb-8">
                  I'm a Full Stack Developer, UI/UX Designer, Network Engineer.{" "}
                </p>
                {/* <button
                  className="btn btn-primary"
                  href="#about"
               
                >
                  Get Started
                </button> */}
              </div>
            </div>
          </div>
        </div>
    );
  }

export default Home;
