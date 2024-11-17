import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed bg-white/75 backdrop-blur-sm z-10 w-full flex items-center justify-between px-4 lg:px-10 py-2 font-[gilroy-bold] border-b-4 border-primary">
      {/* Logo */}
      <div className="logo flex items-center gap-2">
        <img src="/assets/images/logo.png" alt="logo" className="w-8 lg:w-12" />
        <h1 className="font-[gilroy-bold] text-2xl lg:text-3xl text-primary">
          TNP
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4 text-primary">
        <h1>
          For Recruiters <i className="ri-arrow-down-s-line"></i>
        </h1>
        <h1>
          For Students <i className="ri-arrow-down-s-line"></i>
        </h1>
        <h1>
          Team <i className="ri-arrow-down-s-line"></i>
        </h1>
        <h1>Downloads</h1>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-primary text-2xl"
      >
        <i className={`ri-${isMenuOpen ? "close-line" : "menu-line"}`}></i>
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t-2 border-primary shadow-lg lg:hidden">
          <div className="flex flex-col items-center gap-4 text-primary py-4">
            <h1>
              For Recruiters <i className="ri-arrow-down-s-line"></i>
            </h1>
            <h1>
              For Students <i className="ri-arrow-down-s-line"></i>
            </h1>
            <h1>
              Team <i className="ri-arrow-down-s-line"></i>
            </h1>
            <h1>Downloads</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
