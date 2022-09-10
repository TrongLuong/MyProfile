import React, { Component } from "react";
//import "./langding.scss";
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="scrolls">
          <div className="up">
            <span>↑</span>
            <div className="center">
              <span>
                mouse <br /> scrolling
              </span>
            </div>
          </div>
          <div className="down">
            <span>↓</span>
          </div>
        </div>

        <div className="smooth">
          <div className="header">
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#price">price</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
          <section id="home">
            <h2>Section home</h2>
          </section>
          <section id="about">
            <h2>Section about</h2>
          </section>
          <section id="price">
            <h2>Section price</h2>
          </section>
          <section id="contact">
            <h2>Section contact</h2>
          </section>
        </div>
      </>
    );
  }
}
