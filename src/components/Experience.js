import React from "react";
import "./experence.scss";
export default function Experence({ id }) {
  return (
    <section className={id} id={id}>
      <h3>Experience</h3>
      <div className="experence-row">
        <div className="experence-col1">
          <div className="experence-title">
            <h5>AT UNIVERSITY</h5>
            <p>2016-2021</p>
          </div>

          <ul>
            <li>
              Build website shopping with Java, SQL Server, Spring MVC, HTML,
              CSS (CRUD, cart, login/logout...).
            </li>
            <li>
              Build mobile app Find a Locksmith like Grap app. Code with
              JavaAndroid, Firebase, Map-box SDK (CRUD, find the way, order
              ...).
            </li>
            <li>And many other small projects use Jsp Servlet.</li>
          </ul>
        </div>
        <div className="experence-col1">
          <div className="experence-title">
            <h5>FPT SOFTWARE COMPANY</h5>
            <p>03/2020 - 07/2020</p>
          </div>

          <ul>
            <li>Build websites with Java Spring MVC and MySQL.</li>
            <li>Analyze and learn about website implementation processes. </li>
            <li>Learn more about Java core, algorithms.</li>
            <li>Professional handling of project-related issues.</li>
          </ul>
        </div>
        <div className="experence-col1">
          <div className="experence-title">
            <h5>DHSOFT COMPANY</h5>
            <p>12/2020 - 4/2021</p>
          </div>

          <ul>
            <li>Build a website front-end for task management</li>
            <li>Code with React hook, Ant Design, SCSS.</li>
          </ul>
        </div>
        <div className="experence-col1">
          <div className="experence-title">
            <h5>FUJINET SYSTEMS COMPANY</h5>
            <p>05/2021 - 12/2021</p>
          </div>
          <ul>
            <li>Join training about Framework.</li>
            <li>Join the project and code with Intra-mart Framework.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
