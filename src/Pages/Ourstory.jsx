import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Ourstory.css";

const OurStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Ensures animations only happen once
    });
  }, []);

  return (
    <motion.section
      className="our-story-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden" }} // Prevents scroll issues
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0"
            data-aos="fade-right"
          >
            <motion.img
              src="/img/story.png"
              alt="Our Story"
              className="img-fluid rounded story-image"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.02 }}
            />
          </div>

          {/* Right Side: Text */}
          <div className="col-12 col-md-6" data-aos="fade-left">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p className="story-text">
                Digitokmedia’s vision is to Brand your brand as your digital
                partner. Our dedicated team has years of experience in the
                digital industry and uses strategic brainstorming and creative
                solutions to effectively enhance your brand's visibility.
                Through innovative marketing techniques, we aim to amplify your
                brand's presence and promote lasting engagement with your target
                market.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;
