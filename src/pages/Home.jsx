import React from "react";

const Home = () => {
  return (
    <div className="bg-secondary min-h-screen">
      {/* Header Section */}
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/assets/images/logo.png" // Replace with the logo image URL
              alt="Logo"
              className="h-16 w-16 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold">Training and Placement Cell</h1>
              <p>Jalpaiguri Government Engineering College</p>
            </div>
          </div>
          <div className="text-right">
            <p>tnpmail@jgec.ac.in</p>
            <p>9676543210</p>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="relative">
        <div className="bg-primary">
          <img
            src="banner-placeholder.png" // Replace with the banner image URL
            alt="Banner"
            className="w-full h-64 object-cover opacity-80"
          />
        </div>
        <div className="absolute top-0 right-0 m-4">
          <button className="bg-tertiary text-white px-4 py-2 mr-2">
            Past Recruiters
          </button>
          <button className="bg-tertiary text-white px-4 py-2">Why Recruit?</button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto mt-10 px-4">
        <div className="bg-white shadow-md p-6 rounded">
          <h2 className="text-primary text-2xl font-bold">Who are we?</h2>
          <p className="mt-4">
            <strong>Training and Placement Cell</strong>
          </p>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            architecto accusantium ullam quia eos id labore. Excepteur non
            architecto, alias. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptates saepe necessitatibus quas voluptatum possimus!
          </p>
          <div className="mt-6 flex">
            <div className="w-1/2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam repellat officiis possimus harum non tenetur eveniet
                saepe unde similique fugit nostrum porro voluptas.
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <div className="border-2 border-gray-400 h-40 w-64 flex justify-center items-center">
                <span>Image of TnP Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section className="container mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Principal's Message */}
        <div className="bg-white shadow-md p-6 rounded">
          <div className="flex items-center">
            <img
              src="principal-placeholder.png" // Replace with the principal's image URL
              alt="Principal"
              className="h-16 w-16 rounded-full mr-4"
            />
            <h3 className="text-primary font-bold text-xl">Message from Principal</h3>
          </div>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            architecto accusantium ullam quia eos id labore.
          </p>
        </div>

        {/* TnP Head's Message */}
        <div className="bg-white shadow-md p-6 rounded">
          <div className="flex items-center">
            <img
              src="head-placeholder.png" // Replace with the TnP head's image URL
              alt="TnP Head"
              className="h-16 w-16 rounded-full mr-4"
            />
            <h3 className="text-primary font-bold text-xl">Message from TnP Head</h3>
          </div>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            architecto accusantium ullam quia eos id labore.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
