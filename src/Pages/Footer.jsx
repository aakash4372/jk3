import React from 'react';
import { Link } from "react-router-dom";
import './css/Footer.css';
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Wavify from 'react-wavify';
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <>
    

      <footer
        className="z-50 text-white"
        style={{ background: 'linear-gradient(to right, #170732, #5b2885)' }}
        id="contact"
      >
        <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl pt-5 font-bold text-white mb-6 flex items-center justify-center text-center gap-3">
  <span className="flex items-center gap-2">
    Get in Touch
    <span className="animate-slide">
      <IoIosArrowForward className="text-white mt-2 text-3xl sm:text-4xl" />
    </span>
  </span>
</h2>


        {/* Enquiry Button */}
        <div className="flex justify-center pt-11">
          <Link
            to="/equiry"
            className="relative px-8 py-3 no-underline font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:shadow-pink-500/50 transition-transform duration-300 hover:scale-105 animate-pulse overflow-hidden"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 animate-moveX"></span>
            Enquiry
          </Link>
        </div>

        {/* Footer Top */}
        <div className="py-10 pb-32">
          
          <div className="container grid md:grid-cols-4 gap-8 px-4 md:px-0">
            {/* Footer Brand */}
            <div>
              
              <Link to="/" className="inline-block mb-4 bg-white">
                <img src="img/logo.png" alt="Homeverse logo" className="h-10" />
              </Link>
              <p className="text-md text-justify">
                Digitokmedia is your digital partner, dedicated to branding your brand. With years of experience, our team uses strategic and creative solutions to boost your brand's visibility. We help you grow through innovative marketing and lasting audience engagement.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <ul className="space-y-2 text-left">
                <h3 className="text-3xl font-semibold text-left uppercase mb-4">Useful Links</h3>
                <li><a href="/#home" className="text-white text-md no-underline">Home</a></li>
                <li><a href="/#explore" className="text-white text-md no-underline">Explore Us</a></li>
              </ul>
            </div>

            {/* Our Works - Services */}
            <div>
              <ul className="space-y-2 text-left">
                <h3 className="text-3xl font-semibold uppercase text-left mb-4">Our Works</h3>
                {[
                  "GRAPHIC DESIGNING", "VIDEO EDITING", "MOTION GRAPHIC",
                  "DIGITAL MARKETING", "MAGAZINE DESIGNING",
                  "WEBSITE DEVELOPMENT", "BRANDING"
                ].map((work, index) => (
                  <li key={index}>
                    <Link to="/services#services" className="text-white text-md no-underline">
                      {work.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
  <ul className="space-y-3 text-left">
    <h3 className="text-3xl font-semibold uppercase text-left mb-4">Contact</h3>

    {/* Section Title */}
    <li>
      <p className="text-white text-lg font-medium">Reach Out :</p>
    </li>

    {/* Mail */}
    <li className="flex items-center space-x-2">
      <Mail className="w-5 h-5 text-white" />
      <a href="mailto:collab@digitokmedia.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline">
        collab@digitokmedia.com
      </a>
    </li>

    <li>
      <p className="text-white text-lg font-medium">Let’s Talk :</p>
    </li>

    {/* Phone Numbers */}
    <li className="flex items-center space-x-2">
      <Phone className="w-5 h-5 text-white" />
      <a href="tel:+919791542153" className="text-white no-underline">97915 42153</a>
    </li>

    <li>
      <p className="text-white text-lg font-medium">Let’s Chat :</p>
    </li>

    <li className="flex items-center space-x-2">
  <FaWhatsapp className="w-5 h-5 text-white" />
  <a
    href="https://wa.me/916381035430"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white no-underline"
  >
    63810 35430
  </a>
</li>

    {/* Social Media Title */}
    <li>
      <p className="text-white text-lg font-medium mt-4">Stay in Touch :</p>
    </li>

    {/* Social Media Links */}
    <li className="flex space-x-5 mt-2">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="img/instagram.png" alt="Instagram" className="h-8" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="img/youtube.png" alt="Youtube" className="h-8" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="img/facebook.png" alt="Facebook" className="h-8" />
      </a>
    </li>
  </ul>
</div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-gray-800 text-center py-4 text-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} <a href="https://bmtechx.in/" target="_blank" rel="noopener noreferrer" className="text-white no-underline">BMTECHx.in</a> All Rights Reserved
        </div>
      </footer>
    </>
  );
}
