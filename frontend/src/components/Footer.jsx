import React, { useRef, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Footer = ({ id }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading('Sending message...');
    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('http://localhost:5000/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send email');

      toast.dismiss(loadingToast);
      toast.success('Message sent successfully!', {
        duration: 3000,
        position: 'top-center',
      });
      setSent(true);
      form.current.reset();
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error('Email error:', error);
      toast.dismiss(loadingToast);
      toast.error('Failed to send message. Please try again.', {
        duration: 3000,
        position: 'top-center',
      });
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />

      <footer
        id={id}
        className="bg-[#00050b] text-white px-4 sm:px-6 lg:px-12 py-8 sm:py-12"
        style={{ minHeight: '200px' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          {/* Social Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
              I’d love to hear from you! Connect with me on social media or drop a message below.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xl sm:text-2xl">
              {[
                {
                  icon: <FaFacebookF />,
                  href: 'https://www.facebook.com/share/12EkogkVvco/',
                  color: 'hover:text-blue-500',
                },
                {
                  icon: <FaLinkedinIn />,
                  href: 'https://www.linkedin.com/in/shubha-roy-838085355/',
                  color: 'hover:text-blue-400',
                },
                {
                  icon: <FaGithub />,
                  href: 'https://github.com/shubharoydev',
                  color: 'hover:text-gray-200',
                },
                {
                  icon: <FaInstagram />,
                  href: 'https://www.instagram.com/shubha_roy_i?utm_source=qr&igsh=MWx4a2ZsOXBremE1NA==',
                  color: 'hover:text-pink-400',
                },
                {
                  icon: <FaEnvelope />,
                  href: 'mailto:shubharoy0024@gmail.com',
                  color: 'hover:text-red-400',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`transform transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/20 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-800/50">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 text-gray-200 border border-gray-700/50 placeholder-gray-500 text-sm sm:text-base"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 text-gray-200 border border-gray-700/50 placeholder-gray-500 text-sm sm:text-base"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800/50 text-gray-200 border border-gray-700/50 placeholder-gray-500 resize-none text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md text-sm sm:text-base"
              >
                {sent ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-xs sm:text-sm text-gray-400 mt-6 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-800/50">
          © {new Date().getFullYear()} Shubha Roy. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;