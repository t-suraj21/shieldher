import React from "react";
import AlertButton from "../components/AlertButton";

const Emergency = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-8">
      <h2 className="text-3xl font-bold text-red-700 mb-4">Emergency Help</h2>
      <p className="text-gray-700 text-center mb-8 max-w-md">
        Tap the button below to send an instant emergency alert with your live location to your trusted contacts.
      </p>
      <AlertButton />
    </div>
  );
};

export default Emergency;
