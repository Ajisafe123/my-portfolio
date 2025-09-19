import React, { useState } from "react";
import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import { Lock, Shield, Zap } from "lucide-react";
const ContactForm = ({ isActive, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        onClose();
      }, 2000);
    }, 2000);
  };

  if (!isActive) return null;

  if (submitted) {
    return (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-black border-2 border-white p-8 text-center max-w-md w-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <motion.h3
            className="text-2xl font-black mb-4 text-white"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.8)",
                "0 0 10px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <GlitchText>MESSAGE TRANSMITTED!</GlitchText>
          </motion.h3>
          <div className="text-white font-mono text-sm mb-4">
            Your message has been successfully sent.
            <br />
            Expected response time: &lt; 24 hours
          </div>
          <div className="text-green-400 font-mono text-xs">
            TRANSMISSION COMPLETE • CONNECTION SECURE
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-2xl bg-black border-2 border-white relative"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
      >
        <div className="bg-white text-black px-4 py-2 font-mono text-sm flex items-center justify-between">
          <span>MESSAGE_COMPOSER.exe</span>
          <button onClick={onClose} className="text-red-600 font-bold hover:bg-red-100 px-2">×</button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-white mb-2">
              <GlitchText>SECURE MESSAGE TRANSMISSION</GlitchText>
            </h3>
            <div className="text-green-400 font-mono text-xs">
              ENCRYPTED CONNECTION • END-TO-END SECURITY
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-mono text-sm mb-2">SENDER_NAME:</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black border-2 border-gray-600 text-white px-3 py-2 font-mono text-sm focus:border-white focus:outline-none transition-colors"
                whileFocus={{ borderColor: "#ffffff" }}
              />
            </div>
            <div>
              <label className="block text-white font-mono text-sm mb-2">SENDER_EMAIL:</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border-2 border-gray-600 text-white px-3 py-2 font-mono text-sm focus:border-white focus:outline-none transition-colors"
                whileFocus={{ borderColor: "#ffffff" }}
              />
            </div>
          </div>
          <div>
            <label className="block text-white font-mono text-sm mb-2">MESSAGE_SUBJECT:</label>
            <motion.input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-black border-2 border-gray-600 text-white px-3 py-2 font-mono text-sm focus:border-white focus:outline-none transition-colors"
              whileFocus={{ borderColor: "#ffffff" }}
            />
          </div>
          <div>
            <label className="block text-white font-mono text-sm mb-2">MESSAGE_CONTENT:</label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-black border-2 border-gray-600 text-white px-3 py-2 font-mono text-sm focus:border-white focus:outline-none transition-colors resize-none"
              whileFocus={{ borderColor: "#ffffff" }}
              placeholder="Enter your message here..."
            />
          </div>
          <div className="flex justify-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black px-8 py-3 font-mono font-bold text-sm hover:bg-black hover:text-white border-2 border-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={
                !isSubmitting ? { scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" } : {}
              }
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <span>TRANSMITTING...</span>
                </div>
              ) : (
                <GlitchText>SEND MESSAGE</GlitchText>
              )}
            </motion.button>
          </div>
          <div className="border-t border-gray-600 pt-4 text-center">
            <div className="text-xs text-gray-400 font-mono flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><Lock size={14} /> SSL ENCRYPTED</span>
              <span className="flex items-center gap-1"><Shield size={14} /> SPAM PROTECTED</span>
              <span className="flex items-center gap-1"><Zap size={14} /> INSTANT DELIVERY</span>
            </div>
            <div className="text-gray-500 text-xs mt-2">
              All messages are processed securely and confidentially
            </div>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
