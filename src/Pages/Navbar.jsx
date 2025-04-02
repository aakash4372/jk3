import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);  

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  // Animation variants for the nav links
  const navVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    exit: (i) => ({
      opacity: 0,
      x: 20,
      transition: {
        delay: (3 - i) * 0.05,
        duration: 0.2,
        ease: "easeIn"
      }
    })
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" }
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
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
          }
          
          .toggle-btn:hover {
            color: #6b46c1;
          }
          
          .offcanvas-link {
            font-weight: 500;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            display: block;
            padding: 0.5rem 0;
          }
          
          .offcanvas-link:hover {
            color: #6b46c1 !important;
            transform: translateX(5px);
          }

          .offcanvas {
            transition: transform 0.3s ease-in-out;
          }

          .navbar-padding {
            padding-top: 80px; /* To offset the fixed navbar */
          }
        `}
      </style>
      
      {/* Add padding to the body content to account for fixed navbar */}
      <div className="navbar-padding"></div>

      <div className="navbar-container">
        <nav className=" p-4 flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              <img src="/img/logo.png" alt="Company Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop navigation links - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-20">
            <AnimatePresence>
              {showNavLinks && (
                <>
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={navVariants}
                    >
                      <Link 
                        to={link.path} 
                        className="nav-link"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
            
            {/* Desktop toggle button - hidden on mobile */}
            <motion.button
              className="hidden md:block toggle-btn focus:outline-none ml-4"
              onClick={toggleNavLinks}
              aria-label="Toggle navigation"
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {showNavLinks ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile toggle button - visible only on mobile */}
          <motion.button
            className="md:hidden toggle-btn focus:outline-none"
            onClick={toggleMobileNav}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </nav>
      </div>

      {/* Offcanvas navigation for mobile */}
      <div
        className="offcanvas offcanvas-end fixed bottom-0 flex flex-col bg-white w-full max-w-xs shadow-lg"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header flex items-center justify-between p-4 border-b">
          <h5
            className="offcanvas-title text-xl font-bold"
            id="offcanvasNavbarLabel"
          >
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleMobileNav}
          ></button>
        </div>
        <div className="offcanvas-body p-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className="offcanvas-link nav-link py-2 block"
                  onClick={toggleMobileNav}
                  data-bs-dismiss="offcanvas"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;