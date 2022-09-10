import React from "react";
import LoginForm from "./LoginForm";
import "./project.scss";
export default function Project({ id }) {
  return (
    <section className={id} id={id}>
      <div className="project-row">
        {/* <LoginForm /> */}

        <i>Website is under construction, will update later!</i>
      </div>
    </section>
  );
}
