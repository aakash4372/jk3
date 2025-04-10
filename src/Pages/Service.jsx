import React, { useState, useEffect, useRef } from "react";
import Graphic from "/img/GRAPHIC DESINING.jpg";
import Video from "/img/VIDEOS EDITING SERVICE.jpg";
import vrvideo from "/img/VR 360 SERVICE.jpg";
import digitalMarketing from "/img/DIGITAL MARKETING.jpg";
import websiteDevelopment from "/img/WEBSITE CREATION.jpg";
import "./css/service.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

// React Icons
import {
  FaPenFancy,
  FaVideo,
  FaVrCardboard,
  FaBullhorn,
  FaCode,
  FaPhotoVideo,
  FaFilm,
  FaAd,
  FaPodcast,
  FaMobile,
  FaLaptopCode,
  FaPaintBrush,
  FaPenNib,
  FaBusinessTime,
  FaNewspaper,
  FaTshirt,
  FaBoxOpen,
  FaChartBar,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import {
  MdWeb,
  MdDesignServices,
  MdEdit,
  Md360,
  MdTrendingUp,
  MdOutlineAnimation,
  MdOutlineFeaturedVideo,
  MdOutlineVideoSettings,
  MdBusiness,
  MdEmail,
  MdLocalOffer,
  MdStore,
  MdArticle,
} from "react-icons/md";

// Import your video files
import graphicDesignVideo from "/img/GRAPHIC DESINING1.mp4";
import videoEditingVideo from "/img/VIDEO EDITING SERVICE.mp4";
import vrVideosVideo from "/img/VR 360 service.mp4";
import digitalMarketingVideo from "/img/DIGITAL MARKETING VIDEO.mp4";
import websiteDevelopmentVideo from "/img/WEBSITE CREATION1.mp4";

// Icon mapping
const serviceIcons = {
  // // Category icons
  // graphicDesign: <MdDesignServices />,
  // videoEditing: <GiVideoCamera />,
  // vrVideos: <Md360 />,
  // digitalMarketing: <GiCommercialBoat />,
  // websiteDevelopment: <FaLaptopCode />,

  // Specific service item icons
  "Logo Design": <FaPenNib />,
  "Brand Identity & Style Guide": <FaPaintBrush />,
  "Business Card Design": <MdBusiness />,
  "Letterhead & Stationery Design": <MdEmail />,
  "Flyer & Brochure Design": <MdArticle />,
  "Poster & Banner Design": <FaAd />,
  "Advertisement Design": <MdLocalOffer />,
  Magazine: <FaNewspaper />,
  "Social Media Video Ads": <FaFacebook />,
  "Explainer Videos": <MdOutlineFeaturedVideo />,
  "Motion Graphic": <MdOutlineAnimation />,
  Reels: <MdOutlineVideoSettings />,
  "Product Promo Videos": <MdStore />,
  "YouTube Video Editing": <FaFilm />,
  "Event Videos": <FaPhotoVideo />,
  Typography: <FaPenFancy />,
  "Testimonial Videos": <FaVideo />,
  "Logo Animation": <MdOutlineAnimation />,
  Video: <FaVideo />,
  Photos: <FaPhotoVideo />,
  "Google ads": <FaGoogle />,
  "Meta ads": <FaFacebook />,
  "Custom Website Development": <FaCode />,
  "Mobile-Friendly (Responsive) Website": <FaMobile />,
  "Website Maintenance & Updates": <MdWeb />,
  "Website Redesign & Improvement": <FaLaptopCode />,
};

const Servicesection = () => {
  const [activeVideos, setActiveVideos] = useState({
    graphicDesign: false,
    videoEditing: false,
    vrVideos: false,
    digitalMarketing: false,
    websiteDevelopment: false,
  });
  const location = useLocation();

  // Refs for video elements and timeout IDs
  const videoRefs = {
    graphicDesign: useRef(null),
    videoEditing: useRef(null),
    vrVideos: useRef(null),
    digitalMarketing: useRef(null),
    websiteDevelopment: useRef(null),
  };
  const timeoutRefs = useRef({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    // Set up intersection observers for each section
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const sectionIds = [
      "graphicDesign-section",
      "videoEditing-section",
      "vrVideos-section",
      "digitalMarketing-section",
      "websiteDevelopment-section",
    ];

    const observers = {};

    sectionIds.forEach((sectionId) => {
      const videoKey = sectionId.split("-")[0];

      observers[videoKey] = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is in view - start timer to show video
            timeoutRefs.current[videoKey] = setTimeout(() => {
              setActiveVideos((prev) => ({ ...prev, [videoKey]: true }));
              try {
                videoRefs[videoKey].current?.play();
              } catch (e) {
                console.log("Autoplay prevented:", e);
              }
            }, 1400);
          } else {
            // Section is out of view - hide and reset video
            clearTimeout(timeoutRefs.current[videoKey]);
            setActiveVideos((prev) => ({ ...prev, [videoKey]: false }));
            videoRefs[videoKey].current?.pause();
            videoRefs[videoKey].current.currentTime = 0;
          }
        });
      }, observerOptions);

      const element = document.getElementById(sectionId);
      if (element) {
        observers[videoKey].observe(element);
      }
    });

    return () => {
      // Cleanup observers and timeouts
      Object.values(observers).forEach((observer) => {
        observer.disconnect();
      });
      Object.values(timeoutRefs.current).forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
    };
  }, [location]);

  useEffect(() => {
    if (location.hash === "#services") {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Service data for cleaner rendering
  const services = [
    {
      id: "graphicDesign",
      title: "Graphic Design",
      tagline: "Your brand's voice, made visible",
      image: Graphic,
      video: graphicDesignVideo,
      description:
        "Graphic design is the art of visual communication that combines typography, images, colors, and layouts for branding and marketing. We provide logo design, social media graphics, brochures, and flyers to strengthen brand identity. Our services include magazine layouts, packaging design, infographics, and promotional materials like thumbnails and posters, helping businesses establish a strong visual presence.",
      items: [
        "Logo Design",
        "Brand Identity & Style Guide",
        "Business Card Design",
        "Letterhead & Stationery Design",
        "Flyer & Brochure Design",
        "Poster & Banner Design",
        "Advertisement Design",
        "Magazine",
      ],
      align: "left",
    },
    {
      id: "videoEditing",
      title: "Video Editing",
      tagline: "Let's create visuals that speak louder than words",
      image: Video,
      video: videoEditingVideo,
      description:
        "We create documentaries that tell important stories and cover various subjects. Our services include profile videos highlighting individual achievements, engaging reels for creative work or events, insightful podcasts with engaged discussions, professional interview services for authentic perspectives, and impactful advertisements to promote brands and products effectively.",
      items: [
        "Social Media Video Ads",
        "Explainer Videos",
        "Motion Graphic",
        "Reels",
        "Product Promo Videos",
        "YouTube Video Editing",
        "Event Videos",
        "Typography",
        "Testimonial Videos",
        "Logo Animation",
      ],
      align: "right",
    },
    {
      id: "vrVideos",
      title: "Virtual Reality (VR) Videos",
      tagline: "See the world in 360°",
      image: vrvideo,
      video: vrVideosVideo,
      description:
        "Virtual Reality (VR) videos offer an engaging experience that engages viewers in a 360-degree environment. Unlike traditional videos, VR allows users to explore their surroundings freely, creating a genuine sense of presence.",
      items: ["Video", "Photos"],
      align: "left",
    },
    {
      id: "digitalMarketing",
      title: "Digital Marketing",
      tagline: "We Think about what the user is going to type",
      image: digitalMarketing,
      video: digitalMarketingVideo,
      description:
        "Digital marketing involves promoting products, services, or brands through online platforms such as social media, search engines, websites, and email. It encompasses strategies like search engine optimization (SEO), content marketing, social media marketing ( YouTube, Facebook , Instagram ), and paid advertising to engage target audiences, enhance brand awareness, and drive conversions.",
      items: ["Google ads", "Meta ads"],
      align: "right",
    },
    {
      id: "websiteDevelopment",
      title: "Website Development",
      tagline:
        "We don’t just create websites; we craft digital masterpieces that function around the clock for your brand ",
      image: websiteDevelopment,
      video: websiteDevelopmentVideo,
      description:
        "We provide website development services to help businesses build a strong online presence. Our expertise includes creating responsive and user-friendly websites for various purposes, such as e-commerce, portfolios, custom applications, etc. Our services cover UI/UX design, front-end and back-end development, SEO optimization, and website maintenance.",
      items: [
        "Custom Website Development",
        "Mobile-Friendly (Responsive) Website",
        "Website Maintenance & Updates",
        "Website Redesign & Improvement",
      ],
      align: "left",
    },
  ];

  return (
    <div className="service-section" id="services">
   <h2
  className="container text-uppercase service-top-heading text-center pt-40 fs-1"
  data-aos="zoom-in"
>
  Explore &nbsp;our &nbsp;services
</h2>
<h4
  className="container service-sub-heading text-center"
  data-aos="zoom-in"
>
  Discover how our services can<br />enhance your business
</h4>


<div className="text-center mt-4 mb-20" data-aos="fade-up">
  <a
    href="https://wa.me/916381035430"
    target="_blank"
    rel="noopener noreferrer"
    className="no-underline glow-button text-white font-bold py-3 px-6  inline-block transition-all duration-300 hover:scale-105"
    style={{
      background: 'linear-gradient(90deg, #a0499c 0%, #c366ab 100%)',
      boxShadow: '0 0 12px rgba(161, 140, 209, 0.5)' // soft glow
    }}
  >
    SPEAK WITH OUR EXPERTS <span className="ml-2">→</span>
  </a>
</div>



      <div className="">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={`${service.id}-section`}
            className={`service-container ${service.align}`}
            data-aos="fade-up"
            data-aos-delay={index % 2 === 0 ? 100 : 200}
          >
            <div className="service-content-wrapper">
              <div className={`media-container ${service.align}`}>
                <div className="full-width-image" data-aos="zoom-in">
                  <img
                    src={service.image}
                    alt={`${service.title} Services`}
                    className="hover-zoom"
                    style={{ opacity: activeVideos[service.id] ? 0 : 1 }}
                  />
                  <video
                    ref={videoRefs[service.id]}
                    className="hover-video"
                    loop
                    muted
                    playsInline
                    style={{ opacity: activeVideos[service.id] ? 1 : 0 }}
                  >
                    <source src={service.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className={`text-container ${service.align}`}>
                <div
                  className="content-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h1 className="section-title">
                    <span className="title-gradient">{service.title}</span>
                  </h1>
                  <h2 className="tagline-text">
                    &ldquo;&nbsp;
                    {service.tagline} &rdquo;
                  </h2>

                  <p className="description-text">{service.description}</p>

                  <ul className="services-list">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="service-item"
                        data-aos="fade-up"
                        data-aos-delay={300 + itemIndex * 50}
                      >
                        <span className="service-icon">
                          {serviceIcons[item] || serviceIcons[service.id]}
                        </span>
                        <span className="service-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicesection;
