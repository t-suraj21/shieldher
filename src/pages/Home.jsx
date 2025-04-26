import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-8">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">Welcome to SHEsafe</h2>
      <p className="text-gray-700 text-center max-w-lg">
        SHEsafe is your personal safety companion. Quickly send emergency alerts, report harassment anonymously, and learn self-defense tips — all in one place.
      </p>
    </div>
  );
};

export default Home;
