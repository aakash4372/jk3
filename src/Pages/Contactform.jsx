import './css/contactform.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import { BiSend, BiLoaderAlt, BiCheck, BiError } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ContactForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    companyName: '',
    message: '',
    acceptTerms: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  useEffect(() => {
    setCharCount(formData.message.length);
  }, [formData.message]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFieldFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleFieldBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.acceptTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }
  
    setIsLoading(true);
  
    try {
      // Simulate network delay for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
  
      const response = await fetch('https://jk-dm-server.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          contactNumber: formData.contactNumber,
          companyName: formData.companyName,
          message: formData.message
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
  
      toast.success('Message sent successfully!');
      setIsSubmitted(true);
  
      // Reset form state
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        companyName: '',
        message: '',
        acceptTerms: false
      });
  
      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate('/');
      }, 3000);
  
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || 'Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0px 5px 15px rgba(78, 115, 223, 0.2)"
    },
    hover: {
      y: -2
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="form-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          },
        }}
      />
      
      <motion.div 
        className="form-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <AnimatePresence mode='wait'>
          {isSubmitted ? (
            <motion.div
              key="success"
              className="success-message"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="success-icon">
                <BiCheck />
              </div>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully.</p>
              <p>We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="form-title">Send us a message</h2>
              <p className="form-subtitle">We'll get back to you as soon as possible</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="fullName" className="form-label">
                      <i className="bi bi-person-fill"></i> Full name
                    </label>
                    <motion.input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus('fullName')}
                      onBlur={handleFieldBlur}
                      required
                      variants={inputVariants}
                      whileHover="hover"
                      whileFocus="focus"
                    />
                    {activeField === 'fullName' && (
                      <motion.div 
                        className="field-hint"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Enter your full name
                      </motion.div>
                    )}
                  </motion.div>
                  
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="email" className="form-label">
                      <i className="bi bi-envelope-fill"></i> Email Address
                    </label>
                    <motion.input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus('email')}
                      onBlur={handleFieldBlur}
                      required
                      variants={inputVariants}
                      whileHover="hover"
                      whileFocus="focus"
                    />
                    {activeField === 'email' && (
                      <motion.div 
                        className="field-hint"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        We'll never share your email
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                <div className="form-row">
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="contactNumber" className="form-label">
                      <i className="bi bi-telephone-fill"></i> Contact Number
                    </label>
                    <motion.input
                      type="tel"
                      className="form-control"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus('contactNumber')}
                      onBlur={handleFieldBlur}
                      variants={inputVariants}
                      whileHover="hover"
                      whileFocus="focus"
                    />
                    {activeField === 'contactNumber' && (
                      <motion.div 
                        className="field-hint"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Optional but recommended
                      </motion.div>
                    )}
                  </motion.div>
                  
                  <motion.div className="form-group" variants={itemVariants}>
                    <label htmlFor="companyName" className="form-label">
                      <i className="bi bi-building"></i> Company Name
                    </label>
                    <motion.input
                      type="text"
                      className="form-control"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      onFocus={() => handleFieldFocus('companyName')}
                      onBlur={handleFieldBlur}
                      required
                      variants={inputVariants}
                      whileHover="hover"
                      whileFocus="focus"
                    />
                    {activeField === 'companyName' && (
                      <motion.div 
                        className="field-hint"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Your company or organization
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                <motion.div className="form-group" variants={itemVariants}>
                  <div className="message-label-container">
                    <label htmlFor="message" className="form-label">
                      <i className="bi bi-chat-left-text-fill"></i> Your message
                    </label>
                    <div className={`char-counter ${charCount > maxChars ? 'char-counter-error' : ''}`}>
                      {charCount}/{maxChars}
                    </div>
                  </div>
                  <motion.textarea
                    className="form-control message-box"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus('message')}
                    onBlur={handleFieldBlur}
                    required
                    variants={inputVariants}
                    whileHover="hover"
                    whileFocus="focus"
                    maxLength={maxChars}
                  ></motion.textarea>
                  {activeField === 'message' && (
                    <motion.div 
                      className="field-hint"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Tell us how we can help
                    </motion.div>
                  )}
                </motion.div>

                <motion.div 
                  className="form-check terms-check" 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="acceptTerms">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </motion.div>

                <motion.button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading || charCount > maxChars}
                  whileHover={{ 
                    scale: isLoading || charCount > maxChars ? 1 : 1.03,
                    boxShadow: isLoading || charCount > maxChars ? 'none' : '0 6px 20px rgba(255, 75, 43, 0.4)'
                  }}
                  whileTap={{ scale: isLoading || charCount > maxChars ? 1 : 0.97 }}
                >
                  {isLoading ? (
                    <>
                      <BiLoaderAlt className="spin" /> Sending...
                    </>
                  ) : charCount > maxChars ? (
                    <>
                      <BiError /> Message too long
                    </>
                  ) : (
                    <>
                      <BiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;