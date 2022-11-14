import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {
  render() {
    return (
      <section>
          <div className="main">
    <div class="hero min-h-screen b"
        style="background-image: url(../../../assets/images/image\ 1.jpeg); background-size: cover; background-repeat: no-repeat;">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">Maloma Mankopodi Kgopotso</h1>
                <p className="mb-5">I'm a Full Stack Developer, UI/UX Designer, Network Engineer. </p>
                <button className="btn btn-primary" href="#about"
                    onclick="document.getElementById('about').scrollIntoView({behavior:'smooth',block:'start'})">Get
                    Started</button>
            </div>
        </div>
    </div>
</div> 

      </section>
    )
  }
}

export default Home