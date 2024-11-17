import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#8B4513] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Location Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Location</h3>
          <p>Jalpaiguri, West Bengal</p>
          <div className="border rounded-lg overflow-hidden w-[220px] h-[150px] shadow-md cursor-pointer">
            <a
              href="https://www.google.com/maps?q=Jalpaiguri,+West+Bengal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://via.placeholder.com/220x150.png?text=Map+Image"
                alt="College Location"
                className="w-full h-full object-cover"
              />
            </a>
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

