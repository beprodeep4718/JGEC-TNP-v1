import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#8B4513] text-white py-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Location Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Location</h3>
          <p>Jalpaiguri, West Bengal</p>
          <div className="border rounded-lg overflow-hidden w-[220px] h-[150px] shadow-md cursor-pointer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.196807672893!2d88.70117917528172!3d26.54594467686763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e47bce687f169d%3A0x4152036d0d736d37!2sJalpaiguri%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1731827863470!5m2!1sen!2sin"
              width="220"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-sm text-gray-300">
            Location of our college through Google Map and also clickable part
            to open Google Maps for full view.
          </p>
        </div>

        {/* Keep Connected Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Keep Connected</h3>
          <p className="flex items-center">
            📞{" "}
            <a
              href="tel:+919876543210"
              className="ml-2 underline hover:text-yellow-400 transition"
            >
              +91 9876543210
            </a>
          </p>
          <p className="flex items-center">
            📧{" "}
            <a
              href="mailto:tnpmail@jgec.an.in"
              className="ml-2 underline hover:text-yellow-400 transition"
            >
              tnpmail@jgec.an.in
            </a>
          </p>
          <p className="flex items-center">
            🔗{" "}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline hover:text-yellow-400 transition"
            >
              Training and Placement Cell, JGEC
            </a>
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-400 rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-yellow-400"
              required
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full bg-transparent border border-gray-400 rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-yellow-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;         
