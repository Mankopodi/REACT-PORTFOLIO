import { Component } from "react";
import {BsGithub, BsBook} from 'react-icons/bs';
import {AiFillLinkedin, AiOutlineHome, AiOutlineFile} from 'react-icons/ai';
import { CiMail} from 'react-icons/ci';
import {IoMdContact } from 'react-icons/io';
import "./Navbar.css";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume"
import Skil from "../Skills/Skills";
import Contact from "../Contact/Contact";

export class Navbar extends Component {
  render() {
    function homes() {
      document
        .getElementById("home")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function Abouts() {
      document
        .getElementById("about")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function resumes() {
      document
        .getElementById("resume")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function Skills() {
      document
        .getElementById("skills")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function contacts() {
      document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
      <section>
        <div className="flex justify-end">
          <label htmlFor="my-drawer-2"  className="btn btn-ghost drawer-button lg:hidden nav" ></label>
        </div>

        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col  justify-center">
           <main>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="home"><Resume /></section>
            <section id="about"><Skil /></section>
            <section id="contact"><Contact /></section>
           </main>
          </div>

          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content colg">
              <div className="down">
                <div className="avatar flex justify-center avt">
                  <div className="w-24 rounded-full">
                    <img
                      src={require("../../assets/images/profile.jpeg")}
                      alt={"no profile"}
                    />
                  </div>
                </div>
                <div className="flex justify-center font-bold text-2xl named">
                  Maloma Mankopodi Kgopotso
                </div>
                <div className="flex social">
                  <a href="https://github.com/Mankopodi"><BsGithub /> </a>
                  <a className="ml-4"  href="https://www.linkedin.com/in/mankopodi-kgopotso-maloma-30b144217"><AiFillLinkedin /></a>
                </div>

                <li id="scroll">
                  <a href="#home" onClick={() => homes()}>
                   <AiOutlineHome style={{fontSize: "1.5em"}} />
                    Home
                  </a>
                </li>
                <li id="scroll">
                  <a href="#about" onClick={() => Abouts()}>
                  <IoMdContact style={{fontSize: "1.5em"}} />
                    About
                  </a>
                </li>
                <li id="scroll">
                  <a href="#resume" onClick={() => resumes()}>
                  <BsBook style={{fontSize: "1.5em"}} />
                    Resume
                  </a>
                </li>
                <li id="scroll">
                  <a href="#portfolio" onClick={() => Skills()}>
                  <AiOutlineFile style={{fontSize: "1.5em"}} />
                    Skills
                  </a>
                </li>
                <li id="scroll">
                  <a href="#contact" onClick={() => contacts()}>
                  <CiMail style={{fontSize: "1.5em"}} />
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
