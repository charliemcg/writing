import React from "react";
import strings from "./strings";
import "./styles.css";

export default function Services() {
  return (
    <div id="services-wrapper">
      <ul>
        {strings.dotPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div>{strings.paragraph}</div>
    </div>
  );
}
