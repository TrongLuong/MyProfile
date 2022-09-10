import React from "react";

export default function Section({ title, subtitle, id }) {
  return (
    <section className={id} id={id}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}
