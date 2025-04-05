import React from "react";
import './css/TeamSection.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  { id: 1, image: "/img/WebDesigner.png", name: "Web Designer" },
  { id: 2, image: "/img/Video & photographer.png", name: "Video & Photographer" },
  { id: 3, image: "/img/Video editor.png", name: "Video Editor" },
  { id: 4, image: "/img/Designer.png", name: "Designer" },
  { id: 5, image: "/img/Content Writer.png", name: "Content Writer" },
];

const TeamSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // Changed to true for better UX
    slidesToShow: 3, // Reduced from 4
    slidesToScroll: 1,
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          arrows: false 
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          arrows: false 
        } 
      },
    ],
  };

  return (
    <div className="bg-[#fceff8] teamsection">
      <div className="container mx-auto text-center py-10 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-[#b3479a] mb-2">Meet The Team</h2>
        <p className="text-gray-600 max-w-3xl text-center mx-auto my-4 para-team">
        We are a dedicated team of professionals with vast expertise in various fields. Our passion for creativity enables us to develop fresh and impactful ideas to meet our clients' unique needs. We actively seek new partnerships and collaborations, inviting businesses and individuals to join us on this exciting journey of growth and transformation. Together, we can create solutions that genuinely make a difference.
        </p>
        <Slider {...settings} className="mt-10 mx-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="px-2">
              <div className="team-card relative mx-auto w-full max-w-xs">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image w-full h-64 md:h-72 object-cover"
                  loading="lazy"
                  width={288}
                  height={288}
                />
                <div className="team-overlay">
                  <p className="team-name">{member.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSection;