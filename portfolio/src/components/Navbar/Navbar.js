import React, { Component } from "react";
import './Navbar.css'
import Home from "../Home/Home";
import About from "../About/About.js";


export class Navbar extends Component {
  render() {
    function homes() {
      document.getElementById('home').scrollIntoView({behavior:'smooth', block:'start'})
    }
    function Abouts() {
        document.getElementById('about').scrollIntoView({behavior:'smooth', block:'start'})
      }
      function resumes () {
        document.getElementById('resume').scrollIntoView({behavior:'smooth', block:'start'})
      }
      function portfolios() {
        document.getElementById('portfolio').scrollIntoView({behavior:'smooth', block:'start'})
      }
      function contacts() {
        document.getElementById('contact').scrollIntoView({behavior:'smooth', block:'start'})
      }


    return (
      <section>
        <div className="flex justify-end">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </label>
        </div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col  justify-center">
            <main>
              <div id="home"> <Home></Home> </div>
              <div id="About"><About></About></div>
              {/* <div id="Resume"><Resume></Resume></div>
              <div id="Portfolio"><Portfolio></Portfolio></div>
              <div id="Contact"><Contact></Contact></div> */}

            </main>
          </div>

          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content colg">
              <div className="down">
                <div className="avatar flex justify-center avt">
                  <div className="w-24 rounded-full">
                    <img src={require('../../assets/profile.jpeg')} alt={'no profile'}/>
                  </div>
                </div>
                <div className="flex justify-center font-bold text-2xl named">
                  Maloma Mankopodi Kgopotso
                </div>
                <div className="flex social">
                  <a href="https://github.com/Mankopodi">
                    <div className="lk">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-github"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/mankopodi-kgopotso-maloma-30b144217">
                    <div className="lk">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-linkedin"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <line x1="8" y1="11" x2="8" y2="16"></line>
                        <line x1="8" y1="8" x2="8" y2="8.01"></line>
                        <line x1="12" y1="16" x2="12" y2="11"></line>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>
                    </div>
                  </a>
                </div>

                <li>
                  <a href="#home" onClick={() => homes()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-home"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li onClick="document.getElementById('about').scrollIntoView({behavior:'smooth',block:'start'})">
                  <a href="#about" onClick={() => Abouts()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user-circle"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <circle cx="12" cy="10" r="3"></circle>
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                    </svg>
                    About
                  </a>
                </li>
                <li>
                  <a href="#resume" onClick={() => resumes()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-file"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    </svg>
                    Resume
                  </a>
                </li>
                <li onClick="document.getElementById('portfolio').scrollIntoView({behavior:'smooth',block:'start'})">
                  <a href="#portfolio" onClick={() => portfolios()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-vocabulary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z"></path>
                      <path d="M12 5v16"></path>
                      <path d="M7 7h1"></path>
                      <path d="M7 11h1"></path>
                      <path d="M16 7h1"></path>
                      <path d="M16 11h1"></path>
                      <path d="M16 15h1"></path>
                    </svg>
                    Portfolio
                  </a>
                </li>
                <li onClick="document.getElementById('contact').scrollIntoView({behavior:'smooth',block:'start'})">
                  <a href="#contact" onClick={() => contacts()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <polyline points="3 7 12 13 21 7"></polyline>
                    </svg>
                    Contact
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
