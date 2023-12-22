import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants/index";

const Footer = () => {
  return (
    <>
      <section className="footer mt-10">
        <div className="footer-container flex justify-center items-center">
          <p className="text-lg font-bold text-slate-500 text-center">
            Ovais Raza <span className="blue-gradient_text">© </span>
            all rights reserved
          </p>
          {/* Map through socialLinks and return anchor tags with icons */}
          <div className="social-icons">
            {socialLinks.map((socialLink, index) => (
              <a key={index} href={socialLink.link}>
                <img src={socialLink.iconUrl} alt={socialLink.name} style={{ width: '25px', height: '20px' }} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
