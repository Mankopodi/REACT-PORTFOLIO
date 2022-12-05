import React, { Component } from "react";
import './About.css'

export class About extends Component {
  render() {
    
    return (
      <div id='about' className="min-h-screen bg-base-100">
        <h1 className="text-5xl font-bold mb-6 ml-6">About</h1>
        <p className="margin ml-6">
          I am determined, dedicated and passionate with a strong desire to fix,
          improve and solve the challenges that i am confronted with. New
          challanges motivates me. I like to be involved and i am not afraid to
          question and express my views while being faithful. To become the best
          leader in any position that i will uphold. My career goal is to
          continue learning and developing my expertise and to work even harder
          in which ever department i pursue. my vision is to bring commitment,
          faithfulness, integrity and competence to the workplace.
        </p>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={require('../../assets/images/image3.jpeg')}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="kgopotso"
          />
          <div className="">
            <h1 className="text-5xl font-bold">
              Full Stack Developer, UI/UX Designer & Network Engineer.
            </h1>
            <div className="flex lg:flex-row sm:flex-row-1 space-x-8 text-left mt-8 mr-8">
              <ul>
              <li>Degree: National Diploma</li>
                <li>City: Johannesburg</li>
              </ul>
              <ul>
                <li>Email: kgopotsomaloma@icloud.com</li>
                <li>Phone: 066 037 4452</li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
