import React, { useState, useRef } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import "./css/Home.css";
import OurStory from "./Ourstory";

const HeroSection = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const isInView = useInView(heroRef, { triggerOnce: true, margin: "-50px" });
  const [showStory, setShowStory] = useState(false);

  // Define animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: 100, rotate: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 0.8 
      }
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3 
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        bounce: 0.4,
        duration: 0.6 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 10 
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const storyVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleShowStory = () => {
    setShowStory(true);
    setTimeout(() => {
      storyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={loadSlim}
        options={{
          fullScreen: { enable: true, zIndex: 1 },
          particles: {
            number: { value: 20, density: { enable: true, value_area: 1000 } },
            color: {
              value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff06ffbb"],
            },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 5, random: true },
            move: {
              enable: true,
              speed: 1.5,
              direction: "top",
              outModes: { default: "out" },
            },
          },
        }}
      />

      <div className="hero-section" ref={heroRef}  id="home">
        <div className="container py-24" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            {/* Image Section */}
            <motion.div
              className="col-12 col-md-6 order-md-2 d-flex justify-content-center"
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <img
                src="/img/heroiamge.png"
                alt="Digital Marketing"
                className="img-fluid hero-image"
                style={{ maxHeight: "600px" }}
              />
            </motion.div>

            {/* Text and Button Section */}
            <motion.div
              className="col-12 col-md-6 order-md-1 text-center text-md-start mt-4 mt-md-0"
              variants={textContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h4 
                className="fw-bold display-3"
                variants={textItemVariants}
              >
                Your
              </motion.h4>
              <motion.h4 
                className="fw-bold display-4"
                variants={textItemVariants}
              >
                Digital Partner
              </motion.h4>
              <motion.p 
                className="lead mb-4"
                variants={textItemVariants}
              >
                Let your brand’s journey begin.
              </motion.p>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
              >
                <Button className="custom-btn mb-3" onClick={handleShowStory}>
                  <span className="btn-text">Know More</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {showStory && (
        <div
          ref={storyRef}>
       
          <OurStory />
        </div>
      )}
    </>
  );
};

export default HeroSection;