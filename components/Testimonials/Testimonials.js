import React from "react";
import strings from "./strings";
import "./styles.css";

export default function Testimonials() {
  return (
    <div id="testimonials-wrapper">
      <div>{strings.heresWhatSome}</div>
      <div>
        {strings.testimonials.map((testimonial, i) => {
          return (
            <div key={i}>
              <div>{testimonial.headline}</div>
              <div>{testimonial.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
