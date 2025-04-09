import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Offcanvas } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [offcanvasInstance, setOffcanvasInstance] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Bootstrap Offcanvas
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    if (offcanvasElement) {
      const bsOffcanvas = new Offcanvas(offcanvasElement);
      setOffcanvasInstance(bsOffcanvas);

      // Event listeners for offcanvas
      offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        setIsOpen(false);
      });
      offcanvasElement.addEventListener('show.bs.offcanvas', () => {
        setIsOpen(true);
      });

      return () => {
        offcanvasElement.removeEventListener('hidden.bs.offcanvas', () => {});
        offcanvasElement.removeEventListener('show.bs.offcanvas', () => {});
      };
    }
  }, []);

  useEffect(() => {
    if (location.hash === '#contact') {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const toggleMobileNav = () => {
    if (offcanvasInstance) {
      isOpen ? offcanvasInstance.hide() : offcanvasInstance.show();
    }
  };

  const closeOffcanvas = () => {
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  };

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
    exit: (i) => ({
      opacity: 0,
      x: 20,
      transition: { delay: (3 - i) * 0.05, duration: 0.2, ease: "easeIn" },
    }),
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/equiry", name: "Enquiry" },
    { path: "#contact", name: "Contact" },
  ];

  return (
    <>
      <style>
        {`
          .navbar-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1030;
            background-color: white !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
          }
          
          .nav-link {
            text-decoration: none !important;
            position: relative;
            color: #4a5568;
            transition: color 0.3s ease;
            font-weight: 500;
            font-size: 1.125rem;
          }
          
          .nav-link:hover {
            color: #6b46c1 !important;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #6b46c1;
            transition: width 0.3s ease;
          }
          
          .nav-link:hover::after {
            width: 100%;
          }
          
          .toggle-btn {
            transition: transform 0.2s ease;
            background: none;
            border: none;
            padding: 0.5rem;
            z-index: 1050;
          }
          
          .toggle-btn:hover {
            color: #6b46c1;
          }
          
          .offcanvas-link {
            font-weight: 500;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            display: block;
            color: white !important;
            padding: 0.5rem 0;
          }
          
          .offcanvas-link:hover {
            color: white !important;
            transform: translateX(5px);
          }

          .offcanvas {
            background: rgba(255, 255, 255, 0.15) !important;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(3px);
          }

          .btn-close {
            filter: invert(1);
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="navbar-container">
        <nav className="p-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              <img src="/img/logo.png" alt="Company Logo" className="h-14" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-20">
            <AnimatePresence>
              {showNavLinks && navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={navVariants}
                >
                  {link.path.startsWith('#') ? (
                    <a href={link.path} className="nav-link">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="nav-link">
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              className="hidden md:block toggle-btn focus:outline-none ml-4"
              onClick={toggleNavLinks}
              aria-label="Toggle navigation"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {showNavLinks ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Toggle Button */}
          <motion.button
            className="md:hidden toggle-btn focus:outline-none"
            onClick={toggleMobileNav}
            type="button"
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </nav>
      </div>

      {/* Offcanvas Menu */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
          <button
            type="button"
            className="btn-close"
            onClick={toggleMobileNav}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.path.startsWith('#') ? (
                  <a
                    href={link.path}
                    className="offcanvas-link no-underline"
                    onClick={closeOffcanvas}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="offcanvas-link no-underline"
                    onClick={closeOffcanvas}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;