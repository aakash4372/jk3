import React, { useState, useEffect } from "react";
import Graphic from "/img/GRAPHIC DESINING.jpg";
import Video from "/img/VIDEOS EDITING SERVICE.jpg";
import vrvideo from "/img/VR 360 SERVICE.jpg";
import digitalMarketing from "/img/DIGITAL MARKETING.jpg";
import websiteDevelopment from "/img/WEBSITE CREATION.jpg";
import "./css/service.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your video files
import graphicDesignVideo from "/img/GRAPHIC DESINING1.mp4";
import videoEditingVideo from "/img/VIDEO EDITING SERVICE.mp4";
import vrVideosVideo from "/img/VIDEO EDITING SERVICE.mp4";
import digitalMarketingVideo from "/img/DIGITAL MARKETING VIDEO.mp4";
import websiteDevelopmentVideo from "/img/WEBSITE CREATION1.mp4";

const Servicesection = () => {
  const [showMagazineDesc, setShowMagazineDesc] = useState(true); // Set to true by default
  const [hoveredVideo, setHoveredVideo] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const toggleMagazineDesc = () => {
    setShowMagazineDesc(!showMagazineDesc);
  };

  return (
    <div className="service-section">
      <div className="pt-20">
        {/* Graphic Design Section */}
        <div className="graphic-design-container">
          <h1 className="section-title">
            <span className="title-gradient" data-aos="fade-up">GRAPHIC DESIGN</span>
          </h1>

          <div 
            className="full-width-image" 
            data-aos="zoom-in"
            onMouseEnter={() => setHoveredVideo('graphicDesign')}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <img
              src={Graphic}
              alt="Graphic Design Services"
              className="hover-zoom"
              style={{ opacity: hoveredVideo === 'graphicDesign' ? 0 : 1 }}
            />
            <video 
              className="hover-video"
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: hoveredVideo === 'graphicDesign' ? 1 : 0 }}
            >
              <source src={graphicDesignVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="content-card" data-aos="fade-up" data-aos-delay="200">
            <p className="description-text">
              Graphic design is the art of visual communication that combines
              typography, images, colors, and layouts for branding and marketing.
              We provide logo design, social media graphics, brochures, and flyers
              to strengthen brand identity. Our services include magazine layouts,
              packaging design, infographics, and promotional materials like
              thumbnails and posters, helping businesses establish a strong visual
              presence.
            </p>

            <div className="tagline-container" data-aos="fade-up" data-aos-delay="300">
              <div className="decorative-line"></div>
              <p className="tagline">"Your brand's voice, made visible"</p>
              <div className="decorative-line"></div>
            </div>

            <ul className="services-list">
              {[
                "Logo Design",
                "Brand Identity & Style Guide",
                "Business Card Design",
                "Letterhead & Stationery Design",
                "Flyer & Brochure Design",
                "Poster & Banner Design",
                "Advertisement Design",
                "Magazine Layouts",
              ].map((service, index) => (
                <li
                  key={index}
                  className={`service-item ${
                    service === "Magazine Layouts" ? "clickable active" : ""
                  }`}
                  onClick={
                    service === "Magazine Layouts"
                      ? toggleMagazineDesc
                      : undefined
                  }
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 50)}
                >
                  <span className="bullet-point">
                    <span className="bullet-inner"></span>
                  </span>
                  <span className="service-text">{service}</span>
                </li>
              ))}
            </ul>

            {showMagazineDesc && (
              <div className="magazine-description" data-aos="fade-up">
                <p>
                  A magazine is a printed or digital publication that contains
                  articles, images, and advertisements on specific topics. It can
                  be customized for different purposes, such as personal use,
                  business promotion, or gifting.
                </p>
              </div>
            )}
          </div>
        </div>

      {/* Video Editing Section */}
      <div className="graphic-design-container" data-aos="fade-up" data-aos-delay="100">
        <h1 className="section-title">
          <span className="title-gradient" style={{ textTransform: "uppercase" }}>
            Video Editing
          </span>
        </h1>

        <div 
          className="full-width-image" 
          data-aos="zoom-in"
          onMouseEnter={() => setHoveredVideo('videoEditing')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <img
            src={Video}
            alt="Video Editing Services"
            className="hover-zoom"
            style={{ opacity: hoveredVideo === 'videoEditing' ? 0 : 1 }}
          />
          <video 
            className="hover-video"
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: hoveredVideo === 'videoEditing' ? 1 : 0 }}
          >
            <source src={videoEditingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="content-card" data-aos="fade-up" data-aos-delay="200">
          <p className="description-text">
            We create documentaries that tell important stories and cover
            various subjects. Our services include profile videos highlighting
            individual achievements, engaging reels for creative work or events,
            insightful podcasts with engaged discussions, professional interview
            services for authentic perspectives, and impactful advertisements to
            promote brands and products effectively.
          </p>

          <div className="tagline-container" data-aos="fade-up" data-aos-delay="300">
            <div className="decorative-line"></div>
            <p className="tagline">
              "Let's create visuals that speak louder than words."
            </p>
            <div className="decorative-line"></div>
          </div>

          <ul className="services-list">
            {[
              "Social Media Video Ads",
              "Explainer Videos",
              "Motion Graphic",
            ].map((service, index) => (
              <li 
                key={index} 
                className="service-item"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 50)}
              >
                <span className="bullet-point">
                  <span className="bullet-inner"></span>
                </span>
                <span className="service-text">{service}</span>
              </li>
            ))}
          </ul>
          
          <div className="magazine-description" data-aos="fade-up">
              <p>
              Motion graphics are digital animations that animate graphics, text, and illustrations. They are commonly used in videos, advertisements, 2d animation videos , presentations, and social media to enhance storytelling, simplify complex information, and create visually engaging content. By incorporating movement, motion graphics add a dynamic and professional touch to digital media, making messages more impactful and memorable.
              </p>
              <p className="tagline pt-11">
              "Let's create visuals that speak louder than words."
            </p>
          </div>
          
          <ul className="services-list">
            {[
              "Social Media Video Ads",
              "Reels",
              "Product Promo Videos",
              "YouTube Video Editing",
              "Event Videos",
              "Typography ",
              "Testimonial Videos",
              "Logo Animation"
            ].map((service, index) => (
              <li 
                key={index} 
                className="service-item"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 50)}
              >
                <span className="bullet-point">
                  <span className="bullet-inner"></span>
                </span>
                <span className="service-text">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* VR Videos Section */}
      <div className="graphic-design-container" data-aos="fade-up" data-aos-delay="100">
        <h1 className="section-title">
          <span className="title-gradient" style={{ textTransform: "uppercase" }}>
          VIRTUAL REALITY (VR) VIDEOS    
          </span>
        </h1>

        <div 
          className="full-width-image" 
          data-aos="zoom-in"
          onMouseEnter={() => setHoveredVideo('vrVideos')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <img
            src={vrvideo}
            alt="VR Video Services"
            className="hover-zoom"
            style={{ opacity: hoveredVideo === 'vrVideos' ? 0 : 1 }}
          />
          <video 
            className="hover-video"
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: hoveredVideo === 'vrVideos' ? 1 : 0 }}
          >
            <source src={vrVideosVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="content-card" data-aos="fade-up" data-aos-delay="200">
          <p className="description-text">
          Virtual Reality (VR) videos offer an engaging experience that engages viewers in a 360-degree environment. Unlike traditional videos, VR allows users to explore their surroundings freely, creating a genuine sense of presence. 
          </p>

          <div className="tagline-container" data-aos="fade-up" data-aos-delay="300">
            <div className="decorative-line"></div>
            <p className="tagline">
              "See the world in 360°"
            </p>
            <div className="decorative-line"></div>
          </div>

          <ul className="services-list">
            {[
              "Video",
              "Photos"
            ].map((service, index) => (
              <li 
                key={index} 
                className="service-item"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 50)}
              >
                <span className="bullet-point">
                  <span className="bullet-inner"></span>
                </span>
                <span className="service-text">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="graphic-design-container" data-aos="fade-up" data-aos-delay="100">
        <h1 className="section-title">
          <span className="title-gradient" style={{ textTransform: "uppercase" }}>
          DIGITAL MARKETING    
          </span>
        </h1>

        <div 
          className="full-width-image" 
          data-aos="zoom-in"
          onMouseEnter={() => setHoveredVideo('digitalMarketing')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <img
            src={digitalMarketing}
            alt="Digital Marketing Services"
            className="hover-zoom"
            style={{ opacity: hoveredVideo === 'digitalMarketing' ? 0 : 1 }}
          />
          <video 
            className="hover-video"
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: hoveredVideo === 'digitalMarketing' ? 1 : 0 }}
          >
            <source src={digitalMarketingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="content-card" data-aos="fade-up" data-aos-delay="200">
          <p className="description-text">
          Digital marketing involves promoting products, services, or brands through online platforms such as social media, search engines, websites, and email. It encompasses strategies like search engine optimization (SEO), content marketing, social media marketing ( YouTube, Facebook , Instagram ), and paid advertising to engage target audiences, enhance brand awareness, and drive conversions. With data-driven insights and real-time interaction, digital marketing enables businesses to flourish in the constantly evolving online landscape. 
          </p>

          <div className="tagline-container" data-aos="fade-up" data-aos-delay="300">
            <div className="decorative-line"></div>
            <p className="tagline">
              "See the world in 360°"
            </p>
            <div className="decorative-line"></div>
          </div>

          <ul className="services-list">
            {[
              "Google ads",
              "Meta ads"
            ].map((service, index) => (
              <li 
                key={index} 
                className="service-item"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 50)}
              >
                <span className="bullet-point">
                  <span className="bullet-inner"></span>
                </span>
                <span className="service-text">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Website Development Section */}
      <div className="graphic-design-container" data-aos="fade-up" data-aos-delay="100">
        <h1 className="section-title">
          <span className="title-gradient" style={{ textTransform: "uppercase" }}>
          WEBSITE DEVELOPMENT    
          </span>
        </h1>

        <div 
          className="full-width-image" 
          data-aos="zoom-in"
          onMouseEnter={() => setHoveredVideo('websiteDevelopment')}
          onMouseLeave={() => setHoveredVideo(null)}
        >
          <img
            src={websiteDevelopment}
            alt="Website Development Services"
            className="hover-zoom"
            style={{ opacity: hoveredVideo === 'websiteDevelopment' ? 0 : 1 }}
          />
          <video 
            className="hover-video"
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: hoveredVideo === 'websiteDevelopment' ? 1 : 0 }}
          >
            <source src={websiteDevelopmentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="content-card" data-aos="fade-up" data-aos-delay="200">
          <p className="description-text">
          We provide website development services to help businesses build a strong online presence. Our expertise includes creating responsive and user-friendly websites for various purposes, such as e-commerce, portfolios, custom applications, etc .. Our services cover UI/UX design, front-end and back-end development, SEO optimization, and website maintenance. We ensure your site is visually appealing, functional, secure, and optimized for search engines, enhancing user engagement and promoting business growth. 
          </p>

          <div className="tagline-container" data-aos="fade-up" data-aos-delay="300">
            <div className="decorative-line"></div>
            <p className="tagline">
              "We don't just create websites; we craft digital masterpieces that function around the clock for your brand."
            </p>
            <div className="decorative-line"></div>
          </div>

          <ul className="services-list">
            {[
              "Custom Website Development",
              "Mobile-Friendly (Responsive) Website",
              "Website Maintenance & Updates",
              "Website Redesign & Improvement"
            ].map((service, index) => (
              <li 
                key={index} 
                className="service-item"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 50)}
              >
                <span className="bullet-point">
                  <span className="bullet-inner"></span>
                </span>
                <span className="service-text">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Servicesection;