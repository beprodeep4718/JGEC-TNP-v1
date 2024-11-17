import React from 'react';
import 'tailwindcss/tailwind.css';
import teamData from '../data/team.json'; // Import JSON directly

const Teams = () => {
  const Card = ({ name, contact, email }) => (
    <div className="bg-secondary shadow-md rounded-md p-4 text-center">
      <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
      <p className="font-semibold text-primary">{name}</p>
      <p className="text-sm text-gray-600">{contact}</p>
      <p className="text-sm text-primary">{email}</p>
    </div>
  );

  return (
    <div className="bg-secondary min-h-screen p-8">
      {/* Head Section */}
      <div>
        <h2 className="text-xl font-bold bg-primary text-secondary p-3 text-center rounded-md">
          Head of The TnP Cell
        </h2>
        <div className="mt-4 flex justify-center">
          <Card {...teamData.head} />
        </div>
      </div>

      {/* Student Team */}
      <div className="mt-10">
        <h2 className="text-xl font-bold bg-primary text-secondary p-3 text-center rounded-md">
          Student Team : 2024-2025
        </h2>

        {/* SPOCs */}
        <h3 className="text-lg font-bold text-primary mt-6 mb-4">SPOC &apos; s</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamData.spocs.map((spoc, index) => (
            <Card key={index} {...spoc} />
          ))}
        </div>

        {/* Training and Placement Coordinators */}
        <h3 className="text-lg font-bold text-primary mt-10 mb-4">
          Training and Placement Coordinators
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamData.coordinators.map((coordinator, index) => (
            <Card key={index} {...coordinator} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
