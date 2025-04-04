import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "./css/whatwedo.css";

const colors = [
  "#f3c571", // Light Pink
  "#c4c3fb", // Soft Green
  "#f3c571", // Light Orange
  "#ffc0be", // Soft Red
  "#A2D2FF", // Mild Blue
  "#B5EAD7", // Pastel Green
  "#f3c571", // Light Peach
];

const FallingText = ({ words = [], highlightClass = "highlighted" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variants for falling text
  const textVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotate: (Math.random() - 0.5) * 20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.15,
        duration: 0.8,
      },
    }),
    hover: {
      scale: 1.05,
      rotate: 0,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div ref={ref} className="falling-text-container" id="whatwedo">
      {words.map((word, index) => (
        <motion.div
          key={index}
          className={`falling-box ${highlightClass}`}
          style={{ backgroundColor: colors[index % colors.length] }}
          custom={index}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/services" className="falling-text-link">
            {word}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

const Whatwedo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Text children variants
  const textVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  // Image variants
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: 45 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1,
      },
    },
    hover: {
      scale: 1.03,
      rotate: 2,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="section whatwedo-section"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Content */}
          <Col md={6}>
            <motion.p
              className="what-we-do-p"
              variants={textVariants}
              whileHover={{ scale: 1.05, color: "#007bff" }}
            >
              WHAT WE DO
            </motion.p>
            <motion.h4
              className="fw-bold display-3 text-[#3e495b] animated-text"
              variants={textVariants}
              whileHover={{ x: 10 }}
            >
              Your Next Big
            </motion.h4>
            <motion.h4
              className="fw-bold display-4 text-[#3e495b] animated-text"
              variants={textVariants}
              whileHover={{ x: -10 }}
            >
              Move Begins Now
            </motion.h4>
            <motion.p
              className="lead mb-4 animated-text pt-2"
              variants={textVariants}
              animate={{
                y: [0, -5, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
            >
              Your business deserves to be seen.
            </motion.p>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center">
            <motion.img
              src="/img/whatwedo.png"
              alt="G.R.O.W. Lead System"
              className="img-fluid whatwedo-img"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            />
          </Col>
        </Row>
      </Container>

      {/* Falling Text Animation */}
      <div className="falling-text-wrapper">
        <FallingText
          words={[
            "GRAPHIC DESIGNING",
            "VIDEO EDITING",
            "MOTION GRAPHIC",
            "DIGITAL MARKETING",
            "MAGAZINE DESIGNING",
            "WEBSITE DEVELOPMENT",
            "BRANDING",
          ]}
          highlightClass="highlighted"
        />
      </div>
    </motion.div>
  );
};

export default Whatwedo;