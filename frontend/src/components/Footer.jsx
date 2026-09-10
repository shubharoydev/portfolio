import { useRef, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import toast, { Toaster } from 'react-hot-toast';

const Footer = ({ id }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Log the backend URL to confirm it's set
    console.log('Environment Variables:', import.meta.env);
    console.log('Backend URL:', import.meta.env.VITE_BACKEND_URL);

    if (!import.meta.env.VITE_BACKEND_URL) {
      console.error('VITE_BACKEND_URL is not defined. Please check your .env file.');
      toast.error('Backend URL not configured. Please contact the administrator.', {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }

    const loadingToast = toast.loading('Sending message...');

    // Extract form data
    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name')?.trim(),
      user_email: formData.get('user_email')?.trim(),
      message: formData.get('message')?.trim(),
    };
    console.log('Form Data:', Object.fromEntries(formData));
    console.log('Request Payload:', data);

    // Validate form data
    if (!data.user_name || !data.user_email || !data.message) {
      console.error('Validation failed: Missing required fields');
      toast.dismiss(loadingToast);
      toast.error('Please fill in all required fields.', {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.user_email)) {
      console.error('Validation failed: Invalid email format');
      toast.dismiss(loadingToast);
      toast.error('Please enter a valid email address.', {
        duration: 3000,
        position: 'top-center',
      });
      return;
    }

    try {
      console.log('Sending request to:', `${import.meta.env.VITE_BACKEND_URL}/api/email/send`);
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/email/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseBody = await response.json();
      console.log('Response Status:', response.status);
      console.log('Response Body:', responseBody);

      if (!response.ok) {
        throw new Error(responseBody.error || 'Failed to send email');
      }

      toast.dismiss(loadingToast);
      toast.success('Message sent successfully!', {
        duration: 3000,
        position: 'top-center',
      });
      setSent(true);
      form.current.reset();
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error('Email error:', error.message);
      console.error('Error details:', error);
      toast.dismiss(loadingToast);
      toast.error(`Failed to send message: ${error.message}`, {
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
        className="relative bg-[#00050b] text-white px-4 sm:px-6 lg:px-12 py-8 sm:py-12 border-t border-white/10"
        style={{ minHeight: '200px' }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
          {/* Social Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
              I’d love to hear from you — whether it’s a project idea, a collaboration, or just a hello. Connect with me below and I’ll get back to you soon.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-3xl sm:text-4xl">
              {[
                {
                  icon: <FaFacebookF />,
                  href: 'https://www.facebook.com/share/12EkogkVvco/',
                  color: 'text-blue-500',
                },
                {
                  icon: <FaInstagram />,
                  href: 'https://www.instagram.com/shubha_roy_i?utm_source=qr&igsh=MWx4a2ZsOXBremE1NA==',
                  color: 'text-pink-400',
                },
                {
                  icon: <FaLinkedinIn />,
                  href: 'https://www.linkedin.com/in/shubha-roy-838085355/',
                  color: 'text-blue-400',
                },
                {
                  icon: <FaGithub />,
                  href: 'https://github.com/shubharoydev',
                  color: 'text-gray-200',
                },
                {
                  icon: <SiLeetcode />,
                  href: 'https://leetcode.com/u/SHUBHA_ROY/',
                  color: 'text-amber-500',
                },
                {
                  icon: <FaHackerrank />,
                  href: 'https://www.hackerrank.com/profile/royshubha931', 
                  color: 'text-green-500',
                },
                {
                  icon: <FaEnvelope />,
                  href: 'mailto:shubharoy0024@gmail.com',
                  color: 'text-red-400',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.href.startsWith('mailto') ? 'Email' : 'Social link'}
                  className={`transform transition-all duration-300 ${social.color} hover:scale-110 hover:-translate-y-1 drop-shadow-sm hover:drop-shadow-[0_6px_18px_rgba(168,85,247,0.35)]`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/[0.03] p-4 sm:p-7 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800/40 text-gray-200 border border-white/10 placeholder-gray-500 text-sm sm:text-base transition-colors focus:outline-none focus:border-purple-400/60 focus:bg-gray-800/60"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800/40 text-gray-200 border border-white/10 placeholder-gray-500 text-sm sm:text-base transition-colors focus:outline-none focus:border-purple-400/60 focus:bg-gray-800/60"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-800/40 text-gray-200 border border-white/10 placeholder-gray-500 resize-none text-sm sm:text-base transition-colors focus:outline-none focus:border-purple-400/60 focus:bg-gray-800/60"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-medium px-4 sm:px-6 py-3 rounded-xl shadow-md text-sm sm:text-base transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(20,184,166,0.6)] hover:-translate-y-0.5"
              >
                {sent ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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

        <div className="text-center text-xs sm:text-sm text-gray-400 mt-6 sm:mt-12 pt-4 sm:pt-6 border-t border-white/10">
          © {new Date().getFullYear()} Shubha Roy. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;