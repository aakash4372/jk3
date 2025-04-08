import React, { useState, useEffect, useRef } from "react";
import './css/herosection.css';

const ExploreUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutRef.current = setTimeout(() => {
            setShowVideo(true);
          }, 1000); // 2.5s delay
        } else {
          clearTimeout(timeoutRef.current);
          setShowVideo(false);
        }
      },
      { threshold: 0.5 } // Video plays when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="explore-us-container bg-[#F4f3fb]" >
    {/* Decorative elements */}
    <div className="explore-us-decoration decoration-1"></div>
    <div className="explore-us-decoration decoration-2"></div>
    
    <div className="explore-us-content">
      <h1 className={`explore-us-heading ${showVideo ? 'fade-in' : ''}`}>Explore Us</h1>
  
      <div className="explore-us-media-container">
        {showVideo ? (
          <video
            src="/img/explore.mp4"
            autoPlay
            loop
            muted
            className="explore-us-video fade-in"
          />
        ) : (
          <img
            src="/img/explore.png"
            alt="Creative and More"
            className="explore-us-image"
          />
        )}
      </div>
  
      <p className={`explore-us-description ${showVideo ? 'fade-in' : ''}`}>
        With a deep passion for creativity, we specialize in developing unique and impactful strategies 
        with your target audience. Our diverse skill sets enable us to design visually striking campaigns, 
        engaging content, and memorable experiences that set your brand apart in today's competitive market. 
        We can take your brand to new heights and foster meaningful connections with your customers.
      </p>
    </div>
  </div>
  );
};

export default ExploreUs;
