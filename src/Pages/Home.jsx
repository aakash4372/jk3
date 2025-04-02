import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import "./css/Home.css";
import OurStory from "./Ourstory";

const HeroSection = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const isInView = useInView(heroRef, { 
    triggerOnce: true, 
    margin: "-50px" // Increased margin for earlier trigger
  });
  const [showStory, setShowStory] = useState(false);

  const handleShowStory = () => {
    setShowStory(true);
    setTimeout(() => {
      storyRef.current?.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }, 100);
  };

  // Animation variants for smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced stagger time
        delayChildren: 0.1    // Reduced initial delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Faster duration
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className="hero-section" ref={heroRef}>
        <div className="container py-4">
          <div className="row align-items-center">
             {/* Image Section (replaced Lottie) */}
             <motion.div
              className="col-12 col-md-6 order-md-2 d-flex justify-content-center"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut"
                }
              } : {}}
            >
              <img 
                src="/img/heroiamge.png"
                alt="Digital Marketing" 
                className="img-fluid hero-image"
                style={{ maxHeight: "600px" }} // Adjust as needed
              />
            </motion.div>

            {/* Text and Button Section */}
            <motion.div
              className="col-12 col-md-6 order-md-1 text-center text-md-start mt-4 mt-md-0"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.h4
                className="fw-bold display-3"
                variants={itemVariants}
              >
                Your
              </motion.h4>

              <motion.h4
                className="fw-bold display-4"
                variants={itemVariants}
              >
                Digital Partner
              </motion.h4>

              <motion.p
                className="lead mb-4"
                variants={itemVariants}
              >
                Let your brand’s journey begins.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button 
                  className="custom-btn mb-3" 
                  onClick={handleShowStory}
                  as={motion.button}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="btn-text">know more</span>
                  
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {showStory && (
        <motion.div
          ref={storyRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <OurStory />
        </motion.div>
      )}
    </>
  );
};

export default HeroSection;