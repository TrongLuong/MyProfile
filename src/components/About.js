import React from "react";
import "./about.scss";

export default function About({ id }) {
  return (
    <section className={id} id={id}>
      <h3>About me!</h3>
      <div className="about-row">
        <div className="about-information">
          <h4>Seft and Career Objective</h4>
          <br />
          <p>
            Hi, I'm a Web Developer
            <br />
            <br />
            I am considered by people to be quite sociable and friendly.
            Graduated in Software Engineering from Industrial University Ho Chi
            Minh City. I have studied HTML, CSS, JavaSript C/C++, C# and Java.
            Most of the time I'm learning Java.
            <br />
            <br></br>
            After studying and working in companies, I set a goal for myself
            future goal to become a full-stack developer and chalk compete to
            become a Project Manager.
          </p>
          <br />
          <br></br>
          <h4>Skills</h4>
          <div>
            <ul>
              <li>HTML, CSS(SCSS), JS, JAVA.</li>
              <li>Spring Boot, MVC, Security, Reactjs(hook).</li>
              <li>
                Know how to use IntelliJ, Eclipse, Android Studio,Visual Code,
                Postman, Git
              </li>
              <li>
                High self-learning ability, easy to adapt to the surrounding
                environment.
              </li>
              <li>Basic English.</li>
            </ul>
          </div>
        </div>

        <div className="about-career-goals">
          <div>
            <h4>Details</h4>
            <table>
              <tbody>
                <tr>
                  <td>Fullname :</td>
                  <td>Lương Nguyễn Đức Trọng</td>
                </tr>
                <tr>
                  <td>Birth:</td>
                  <td>May 16, 1998</td>
                </tr>
                <tr>
                  <td>Sex:</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>094 7787 904</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>trongluong3377@gmail.com</td>
                </tr>
                <tr>
                  <td>Address: </td>
                  <td>174/35, Nguyễn Tư giản, Gò Vâp, HCM</td>
                </tr>
              </tbody>
            </table>
            <br />
            <h4>Hobbies</h4>
            <table>
              <tbody>
                <tr>
                  <td>Listen to music</td>
                  <td>Watch movie</td>
                  <td>Travel</td>
                </tr>
                <tr>
                  <td>Read the paper (book)</td>
                  <td>Cafe </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
