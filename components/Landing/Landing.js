import React from "react";
import strings from "./strings";
import "./styles.css";

export default function Landing() {
  return (
    <div id="landing-wrapper">
      <div>{strings.headline}</div>
      <div>{strings.paragraph1}</div>
      <div>{strings.paragraph2}</div>
      <div>{strings.paragraph3}</div>
      <div>{strings.paragraph4}</div>
    </div>
  );
}
