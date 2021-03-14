import React from "react";
import strings from "./strings";
import "./styles.css";

export default function Header() {
  return (
    <div id="header-wrapper">
      <div>{strings.title}</div>
      <div>{strings.techWriting}</div>
      {strings.links.map((link, i) => (
        <div key={i}>{link}</div>
      ))}
    </div>
  );
}
