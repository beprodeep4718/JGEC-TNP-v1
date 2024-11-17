import React from "react";

const HeaderSection = () => {
  return (
    <header className="bg-secondary py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Logo and Text */}
        <div className="flex items-center space-x-4">
          <img
            src="logo-placeholder.png" // Replace with the actual logo image URL
            alt="TnP Logo"
            className="h-20 w-20"
          />
          <div>
            <h1 className="text-primary text-3xl font-bold leading-tight">
              Training and Placement Cell
            </h1>
            <p className="text-tertiary text-lg">
              Jalpaiguri Government Engineering College
            </p>
          </div>
        </div>

        {/* Right Section: Contact Details */}
        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
          <p className="text-primary font-medium">tnpmail@jgec.ac.in</p>
          <p className="text-primary font-medium">9876543210</p>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-4">
          <img
            src="image-placeholder-1.png" // Replace with the actual image URLs
            alt="Campus View"
            className="h-40 w-full object-cover rounded-md"
          />
          <img
            src="image-placeholder-2.png"
            alt="Entrance"
            className="h-40 w-full object-cover rounded-md"
          />
          <img
            src="image-placeholder-3.png"
            alt="Students"
            className="h-40 w-full object-cover rounded-md"
          />
          <img
            src="image-placeholder-4.png"
            alt="Classroom"
            className="h-40 w-full object-cover rounded-md"
          />
        </div>

        {/* Buttons */}
        <div className="absolute top-4 right-4 flex space-x-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-tertiary">
            Past Recruiters
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-tertiary">
            Why Recruit? <span className="ml-2">▼</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
