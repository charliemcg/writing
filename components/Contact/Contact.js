import React, { useState, useRef } from "react";
import strings from "./strings";
import "./styles.scss";
import validator from "validator";

export default function Contact() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const deadlineRef = useRef();
  const messageRef = useRef();
  const [formErrors, updateErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    message: null,
  });

  const onSubmit = () => {
    const { errors } = strings;
    let newErrors = {};
    // first name
    validator.isEmpty(firstnameRef.current.value, {
      ignore_whitespace: true,
    }) && (newErrors = { ...newErrors, firstName: errors.firstNameRequired });
    // last name
    validator.isEmpty(lastnameRef.current.value, {
      ignore_whitespace: true,
    }) && (newErrors = { ...newErrors, lastName: errors.lastNameRequired });
    // email
    validator.isEmpty(emailRef.current.value, {
      ignore_whitespace: true,
    })
      ? (newErrors = { ...newErrors, email: errors.emailRequired })
      : !validator.isEmail(emailRef.current.value) &&
        (newErrors = { ...newErrors, email: errors.emailInvalid });
    // message
    validator.isEmpty(messageRef.current.value, {
      ignore_whitespace: true,
    }) && (newErrors = { ...newErrors, message: errors.messageRequired });
    //send email or display errors
    Object.keys(newErrors).length === 0 &&
      alert("TODO connect to email server");
    updateErrors(newErrors);
  };

  // an individual form input
  const getInput = (contactDetails) => {
    // const { label, type, ref, error } = contactDetails;
    const { label, input, error } = contactDetails;
    return (
      <div key={contactDetails.i} id="contact-input-wrapper">
        <label>
          {label}
          {label !== strings.deadline && (
            <span style={{ color: "red" }}>*</span>
          )}
        </label>
        {input}
        {/* <input
          type={type}
          className="contact-input"
          ref={ref}
          maxLength="25"
          style={formErrors[error] && { border: "solid 2px red" }}
        /> */}
        <div id="contact-error">{formErrors[error]}</div>
      </div>
    );
  };

  return (
    <div id="contact-wrapper">
      <div id="contact-form-wrapper">
        <div id="contact-title-wrapper">{strings.contact}</div>
        {getInput({
          label: strings.firstName,
          input: (
            <input
              type="text"
              className="contact-input"
              ref={firstnameRef}
              maxLength="25"
              style={formErrors.firstName && { border: "solid 2px red" }}
            />
          ),
          error: "firstName",
        })}
        {getInput({
          label: strings.lastName,
          input: (
            <input
              type="text"
              className="contact-input"
              ref={lastnameRef}
              maxLength="25"
              style={formErrors.lastName && { border: "solid 2px red" }}
            />
          ),
          error: "lastName",
        })}
        {getInput({
          label: strings.email,
          input: (
            <input
              type="email"
              className="contact-input"
              ref={emailRef}
              maxLength="25"
              style={formErrors.email && { border: "solid 2px red" }}
            />
          ),
          error: "email",
        })}
        {getInput({
          label: strings.deadline,
          input: (
            <select className="contact-input">
              {strings.deadlineOptions.map((option, i) => (
                <option key={i}>{option}</option>
              ))}
            </select>
          ),
          error: null,
        })}
        {getInput({
          label: strings.message,
          input: (
            <textarea
              id="contact-textarea"
              ref={messageRef}
              maxLength="2500"
              placeholder={strings.messagePlaceholder}
              style={formErrors.message && { border: "solid 2px red" }}
            />
          ),
          error: "message",
        })}
      </div>
      <div id="contact-submit-wrapper">
        <button id="contact-submit-btn" onClick={onSubmit}>
          {strings.submit}
        </button>
      </div>
    </div>
  );
}
