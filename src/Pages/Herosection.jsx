import React, { useState, useRef, useEffect } from "react";
import "./css/herosection.css";

const Herosection = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoEnded && videoRef.current) {
        setVideoEnded(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [videoEnded]);

  return (
    <div className="section explore-section py-5 position-relative">
      <div className="container px-4">
        <h2 className="text-center uppercase mb-5 fw-bold">Explore Us</h2>
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="ratio ratio-16x9" style={{ zIndex: "3" }}>
              {!videoEnded ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  onEnded={handleVideoEnd}
                  className="w-100 h-100 object-fit-cover rounded"
                >
                  <source src="/img/explore.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src="/img/explore.png"
                  alt="Explore Us"
                  className="w-100 h-100 object-fit-cover rounded"
                />
              )}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p className="lead">
              With a deep passion for creativity, we specialize in developing
              unique and impactful strategies with your target audience. Our
              diverse skill sets enable us to design visually striking
              campaigns, engaging content, and memorable experiences that set
              your brand apart in today's competitive market. We can take your brand to new heights and foster meaningful connections with your customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;