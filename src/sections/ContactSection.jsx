import React, { forwardRef, useState } from "react";
import { motion} from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import GlitchText from "../ui/GlitchText";
import ScrollReveal from "../ui/ScrollReveal";
import HologramContactCard from "./HologramContactCard";
import ContactForm from "./ContactForm";

const ContactSection = forwardRef((props, ref) => {
  const [activeModal, setActiveModal] = useState(null);

  const contactMethods = [
    {
      type: "MESSAGE",
      content: "Send Direct Message",
      icon: <MessageCircle size={28} />,
      description: "Secure Contact Form",
      action: () => setActiveModal("form"),
    },
    {
      type: "GITHUB",
      content: "Code Repository",
      icon: <Github size={28} />,
      description: "Development Portfolio",
      action: () => window.open("https://github.com/Ajisafe123", "_blank"),
    },
    {
      type: "LINKEDIN",
      content: "Professional Network",
      icon: <Linkedin size={28} />,
      description: "Business Connection",
      action: () => window.open("www.linkedin.com/in/ajisafe-ibrahim-8862a425b", "_blank"),
    },
  ];

  return (
    <div
      id="contact"
      ref={ref}
      className="min-h-screen bg-black text-white p-8 flex items-center relative"
    >
    
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white"
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10}%`,
            }}
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>

    
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <ScrollReveal direction="up">
          <motion.h2
            className="text-6xl font-black mb-8"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <GlitchText>CONTACT</GlitchText>
          </motion.h2>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <p className="text-xl mb-12 font-mono">
            INITIATING COMMUNICATION PROTOCOLS...
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.type}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <HologramContactCard {...method} onClick={method.action} />
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

       
        <ScrollReveal direction="up">
          <motion.div
            className="border-2 border-white bg-black p-6 font-mono"
            animate={{
              borderColor: [
                "rgba(255,255,255,0.5)",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-green-400 mb-2">SYSTEM STATUS: ONLINE</div>
            <div className="text-white mb-2">RESPONSE TIME: &lt; 24 HOURS</div>
            <div className="text-white mb-4">AVAILABILITY: 24/7</div>
            <motion.div
              className="text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Let's build the future of web together
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>

        <ContactForm
          isActive={activeModal === "form"}
          onClose={() => setActiveModal(null)}
        />
    </div>
  );
});

export default ContactSection;
