import React from "react";
import strings from "./strings";
import "./styles.css";

export default function About() {
  return (
    <div id="about-wrapper">
      <div>{strings.paragraph1}</div>
      <div>{strings.paragraph2}</div>
      <div>{strings.paragraph3}</div>
      <ul>
        {strings.dotPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div>{strings.paragraph4}</div>
      <div>{strings.paragraph5}</div>
      <div>{strings.paragraph6}</div>
    </div>
  );
}
