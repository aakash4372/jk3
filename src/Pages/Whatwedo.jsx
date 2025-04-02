import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/whatwedo.css";

const colors = [
  "#f3c571", // Light Pink
  "#c4c3fb", // Soft Green
  "#F6D6AD", // Light Orange
  "#ffc0be", // Soft Red
  "#A2D2FF", // Mild Blue
  "#B5EAD7", // Pastel Green
  "#FFDAC1", // Light Peach
];

const FallingText = ({ words = [], highlightClass = "highlighted" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="falling-text-container">
      {words.map((word, index) => {
        const randomRotation = (Math.random() - 0.5) * 20;
        const bgColor = colors[index % colors.length];

        return (
          <motion.div
            key={index}
            className={`falling-box ${highlightClass}`}
            style={{ backgroundColor: bgColor }}
            initial={{ y: "-100vh", opacity: 0, rotate: randomRotation }}
            animate={isInView ? { y: 0, opacity: 1, rotate: randomRotation } : {}}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: "easeOut",
            }} 
          >
            <Link to="/services" className="falling-text-link">
              {word}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

const Whatwedo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      AOS.init({ duration: 1200 });
    }
  }, [isInView]);

  return (
    <div className="section whatwedo-section" ref={sectionRef}>
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Left Side: Content */}
          <Col md={6}>
            <p className="what-we-do-p">WHAT WE DO</p>
            <motion.h4
              className="fw-bold display-3 animated-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{ position: "relative", zIndex: 2 }}
            >
              Your next big 
            </motion.h4>

            <motion.h4
              className="fw-bold display-4 animated-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{ position: "relative", zIndex: 2 }}
            >
              move begins now
            </motion.h4>

            <motion.p
              className="lead mb-4 animated-text pt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              style={{ position: "relative", zIndex: 2 }}
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
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Falling Text Animation - Moved outside Container and added padding */}
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
    </div>
  );
};

export default Whatwedo;