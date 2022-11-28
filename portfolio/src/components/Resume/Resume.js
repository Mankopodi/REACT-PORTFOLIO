import React, { Component } from 'react'
import './Resume.css'

export class Resume extends Component {
  render() {

    return (
      <section>
          <div id='resume' className=".min-h-screen bg-base-100 mb-6">
    <h1 className="text-5xl font-bold flex justify-start mb-3 ">Resume</h1>
    <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-full card bg-base-300 rounded-box">
            <div className="card-body">
                <h1 className="text-4xl font-bold ">Education</h1>
                <p className="text-2xl mt-6 font-bold ">National Diploma in Information Technology(Communication Networks)
                </p>
                <div className="date">15 january 2018 - 31 August 2021</div>
                <i>Tshwane University of Technology</i>

                <h1 className="text-2xl font-bold ">NSC Diploma</h1>
                <p className="">January 2012 - December 2016</p>
                <div className="date"></div>
                <i>Northern Academy Independent School</i>

                <h1 className="text-4xl font-bold mt-6 ">Professional Experience</h1>
                <h1 className="text-2xl font-bold">The Digital Academy</h1>
                <i className="job title text-1xl font-bold i">Full Stack Developer</i>
                <div className="date">2022 Present</div>
                <i>The Media Mill, 7 Quince St, Auckland Park, Johannesburg, 2000</i>
                <div className="duties">
                    <ul>
                        <li>Project Management (Trello Board).</li>
                        <li>UX\UI Designer (Figma).</li>
                        <li>PostgreSQL.</li>
                        <li>Frontend using Angular 2+.</li>
                        <li> Backend ussing Node.js Express.</li>
                        <li>DevOps.</li>
                        <li>Docker.</li>
                        <li>Unit Testing.</li>
                    </ul>
                </div>
                <h1 className="text-2xl font-bold">Gijima (GDE Ekurhuleni South)</h1>
                <i className="job title text-1xl font-bold i">Support System</i>
                <div className="date">April 2022 - June 2022</div>
                <i>36 Gazelle Close, Corparate Park South, Midrand</i>
                <div className="duties">
                    <ul>
                        <li>Connecting printer to users.</li>
                        <li>Installing MIP Flow.</li>
                        <li>Viewing logged problems.</li>
                        <li>Password resetting to users.</li>
                        <li> Installing citrix and creating user's account.</li>
                        <li>Configuring server and local network.</li>
                    </ul>
                </div>
                <h1 className="text-2xl font-bold">Alviva Shared Management Services(Axiz)</h1>
                <i className="job title text-1xl font-bold i">Support System</i>
                <div className="date">January 2022 - April 2022</div>
                <i>36 Gazelle Close, Corparate Park South, Midrand</i>
                <div className="duties">
                    <ul>
                        <li>Design, Develop, and test interfaces and upgrades to existing
                            systems.</li>
                        <li>Monitor the system, set up automated alerts, and performance
                            notifications to proactively address problems. </li>
                        <li>Consult with vendors representatives when resolving software
                            and hardware problems.</li>
                        <li>Plan the installation and implementation of new hardware and
                            software.</li>
                        <li> Troubleshoot, upgrade, monitor, and diagnose application and
                            system problems to enable ongoing business.</li>
                    </ul>
                </div>
                <h1 className="text-2xl font-bold">Talent Centric</h1>
                <i className="job title text-1xl font-bold i">Technical Support</i>
                <div className="date">september 2021 - january 2022</div>
                <i>Park, 87 New Road Grand Central, New Rd, Halfway House Estate, Midrand, 1685</i>
                <div className="duties">
                    <ul>
                        <li>Installing and configuring computer software.   </li>
                        <li>Managing multiple cases at one time.</li>
                        <li>Debugging software.</li>
                        <li>Providing support in the form of procedural documentation.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
      </section>
    )
  }
}

export default Resume

