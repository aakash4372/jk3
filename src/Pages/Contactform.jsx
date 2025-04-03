import './css/contactform.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';
import { BiSend, BiLoaderAlt } from 'react-icons/bi';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    companyName: '',
    message: '',
    acceptTerms: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    setIsLoading(true);
    
    try {
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
      
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          contactNumber: '',
          companyName: '',
          message: '',
          acceptTerms: false
        });
      } else {
        toast.error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Network error:', error);
      toast.error('Network error. Please try again.');
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
          },
        }}
      />
      
      <motion.div 
        className="form-card mt-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
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
                required
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
              />
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
                required
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
              />
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
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
              />
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
                required
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
              />
            </motion.div>
          </div>

          <motion.div className="form-group" variants={itemVariants}>
            <label htmlFor="message" className="form-label">
              <i className="bi bi-chat-left-text-fill"></i> Your message
            </label>
            <motion.textarea
              className="form-control message-box"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              variants={inputVariants}
              whileHover="hover"
              whileFocus="focus"
            ></motion.textarea>
          </motion.div>

          <motion.div className="form-check terms-check" variants={itemVariants}>
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
            disabled={isLoading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {isLoading ? (
              <>
                <BiLoaderAlt className="spin" /> Sending...
              </>
            ) : (
              <>
                <BiSend /> Send Message
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;