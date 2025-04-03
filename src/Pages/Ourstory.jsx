import React from "react";
import { motion } from "framer-motion";
import "./css/Ourstory.css";

const OurStory = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Child animation variants
  const childVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Image specific variants
  const imageVariants = {
    hidden: { opacity: 0, x: -100, rotate: 5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="our-story-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ overflow: "hidden" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <motion.img
              src="/img/story.png"
              alt="Our Story"
              className="img-fluid rounded story-image"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            />
          </div>

          {/* Right Side: Text */}
          <div className="col-12 col-md-6">
            <motion.div variants={childVariants}>
              <motion.h2
                className="fw-bold mb-4"
                variants={childVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Our Story
              </motion.h2>
              <motion.p
                className="story-text"
                variants={childVariants}
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
              >
                Digitokmedia’s vision is to Brand your brand as your digital
                partner. Our dedicated team has years of experience in the
                digital industry and uses strategic brainstorming and creative
                solutions to effectively enhance your brand's visibility.
                Through innovative marketing techniques, we aim to amplify your
                brand's presence and promote lasting engagement with your target
                market.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;