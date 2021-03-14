import React from "react";
import strings from "./strings";
import "./styles.css";

export default function Footer() {
  const socialArr = [
    {
      id: "footer-social",
      src: "Facebook.png",
      alt: strings.facebookAlt,
      href: strings.facebookHref,
    },
    {
      id: "footer-social",
      src: "Linkedin.png",
      alt: strings.linkedinAlt,
      href: strings.linkedInHref,
    },
  ];
  return (
    <div id="footer-wrapper">
      <div id="footer-left">
        <div id="footer-social-wrapper">
          {socialArr.map((icon, i) => {
            const { id, src, alt, href } = icon;
            return (
              <a key={i} href={href}>
                <img id={id} src={src} alt={alt} />
              </a>
            );
          })}
        </div>
        <div id="footer-details">
          <div id="footer-phone">{strings.phone}</div>
          <div id="footer-copyright">
            © {new Date().getFullYear()} {strings.company}
          </div>
        </div>
      </div>
      <div id="footer-plug">
        {strings.websiteBy}
        {"\u2004"}
        <span style={{ fontWeight: "bold" }}>{strings.myName}</span>
      </div>
    </div>
  );
}
