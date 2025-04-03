import React from 'react';
import { Link } from "react-router-dom";
import './css/Footer.css';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 z-50 text-white" id="contact">
      {/* Footer Top */}
      <div className="py-10">
        <div className="container grid md:grid-cols-4 gap-8">
          
          {/* Footer Brand */}
          <div>
            <Link to="/" className="inline-block mb-4 bg-white">
              <img src="img/logo.png" alt="Homeverse logo" className="h-10" />
            </Link>
            <p className="text-sm text-justify">
            Digitokmedia is your digital partner, dedicated to branding your brand. With years of experience, our team uses strategic and creative solutions to boost your brand's visibility. We help you grow through innovative marketing and lasting audience engagement.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <ul className="space-y-2 text-left">
              <h3 className="text-lg font-semibold text-left uppercase mb-4">Useful Links</h3>
              <li><Link to="/#home" className="text-white no-underline">Home</Link></li>
              <li><Link to="/#whatwedo" className="text-white no-underline">What we do</Link></li>
              <li><Link to="/#explore" className="text-white no-underline">Explore Us</Link></li>
            </ul>
          </div>

          {/* Our Works - Services */}
          <div>
            <ul className="space-y-2 text-left">
              <h3 className="text-lg font-semibold uppercase text-left mb-4">Our Works</h3>
              {[
                "GRAPHIC DESIGNING", "VIDEO EDITING", "MOTION GRAPHIC",
                "DIGITAL MARKETING", "MAGAZINE DESIGNING",
                "WEBSITE DEVELOPMENT", "BRANDING"
              ].map((work, index) => (
                <li key={index}>
                  <Link to="/services" className="text-white no-underline">
                    {work.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <ul className="space-y-3 text-left">
              <h3 className="text-lg font-semibold uppercase text-left mb-4">Contact</h3>
              {/* Address */}
        {/* <li className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-white" />
          <span className="text-white">Erode, TN</span>
        </li> */}

        {/* Mail */}
        <li className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-white" />
          <a href="mailto:collab@digitokmedia.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline">
            collab@digitokmedia.com
          </a>
        </li>

        {/* Phone Numbers */}
        <li className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-white" />
          <a href="tel:+916381035430" className="text-white no-underline">63810 35430</a>  
        </li>

        <li className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-white" />
          <a href="tel:+919791542153" className="text-white no-underline">97915 42153</a>
        </li>

              
              {/* Social Media Links */}
              <li className="flex space-x-5 mt-4">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img src="img/instagram.png" alt="Instagram" className="h-8" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img src="img/youtube.png" alt="youtube" className="h-8" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img src="img/facebook.png" alt="Facebook" className="h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} <a href="https://bmtechx.in/" target="_blank" rel="noopener noreferrer" className="text-white no-underline">BMTECHx.in</a> All Rights Reserved
      </div>
    </footer>
  );
}
