import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const MapPinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.8 1.8 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status) setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setStatus({ type: "sending", message: "Sending message..." });

    // Send main email first
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_TO_YOU,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "ajisafeibrahim54@gmail.com",
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_AUTO_REPLY,
          {
            to_name: formData.name,
            to_email: formData.email,
            reply_to: formData.email,
            user_email: formData.email,
            message: formData.message,
            from_name: "Ibrahim Ajisafe",
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).catch((autoReplyError) => {
          // Log auto-reply error but don't show it to user
          console.warn("Auto-reply failed:", autoReplyError);
        });

        // Show success message
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Main email failed:", error);
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      });
  };

  return (
    <section className="relative bg-black text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="h1-text text-4xl md:text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-600">
              GET IN TOUCH
            </span>
          </h1>
          <p className="text-gray-400 mt-2 text-base">
            Have a project or just want to say hi? Message me below or use my
            email/phone.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8 rounded-md border border-gray-700">
          <div className="lg:w-1/3 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-2">Contact Info</h3>

            {[
              {
                icon: MailIcon,
                label: "Email",
                value: "ajisafeibrahim54@gmail.com",
                link: "mailto:ajisafeibrahim54@gmail.com",
              },
              {
                icon: PhoneIcon,
                label: "Phone",
                value: "+234 905 645 3575",
                link: "tel:+2349056453575",
              },
              {
                icon: MapPinIcon,
                label: "Location",
                value: "Lagos, Nigeria",
                link: "#",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex p-3 rounded-md border border-gray-800 hover:border-purple-500 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-300 text-sm">
                      {item.label}
                    </p>
                    {item.link !== "#" ? (
                      <a
                        href={item.link}
                        className="text-gray-400 hover:text-purple-500 text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="mt-4 h-40 w-full rounded-md overflow-hidden border border-gray-700">
              <iframe
                title="Location Map"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.72266746813!2d3.39486395!3d6.52437935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68cc163%3A0x6d97c36a4ee227a6!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="border-0"
              ></iframe>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-4 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-sm"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-4 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-sm"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-4 rounded-md bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition text-sm"
              />

              {status && (
                <div
                  className={`p-3 rounded-md text-sm font-medium ${status.type === "success"
                    ? "bg-green-900/50 text-green-300 border border-green-700"
                    : status.type === "error"
                      ? "bg-red-900/50 text-red-300 border border-red-700"
                      : "bg-purple-900/50 text-purple-300 border border-purple-700"
                    }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status?.type === "sending"}
                className={`w-full py-3 font-semibold rounded-md text-white bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all ${status?.type === "sending"
                  ? "opacity-70 cursor-not-allowed"
                  : ""
                  }`}
              >
                {status?.type === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
