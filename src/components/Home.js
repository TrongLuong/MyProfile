import React from "react";
import avatar from "../asset/img/avatar.jpeg";
import "./home.scss";
export default function Home({ id }) {
  return (
    <section className={id} id={id}>
      <div className="home-content">
        {/* <div className="top"></div> */}
        <div className="avatar">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={avatar} alt="avatar" />
            <div className="name">I'm Trong</div>
            <div className="job">IT STAFF</div>
          </div>
          {/* <div className="center"> </div> */}
        </div>
        <div className="introduce">
          <div className="hello">
            <h1>Hello!</h1>
          </div>
          <div className="introduce-content">
            <p>
              My full name is <span> Luong Nguyen Duc Trong.</span>
            </p>
            <p>I am 24 years old, I come from Tay Ninh province.</p>
            <p>Currently living and working in Ho Chi Minh City.</p>
            <p>
              I like technology, I want to control it, so I chose to be a
              programmer.
            </p>
          </div>
        </div>

        {/* <div className="bottom"></div> */}
      </div>
    </section>
  );
}
