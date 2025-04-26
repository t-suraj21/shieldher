import React, { useState } from "react";

const AlertButton = () => {
  const [loading, setLoading] = useState(false);

  const sendAlert = async () => {
    if (!("geolocation" in navigator)) {
      alert("Geolocation not supported!");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const response = await fetch("http://localhost:5000/alert/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ latitude, longitude }),
        });

        const data = await response.json();

        if (data.success) {
          alert("🚨 Emergency alert sent successfully!");
        } else {
          alert("❌ Failed to send alert. Try again.");
        }
      } catch (error) {
        console.error(error);
        alert("❌ Error sending alert.");
      } finally {
        setLoading(false);
      }
    });
  };

  return (
    <button
      onClick={sendAlert}
      disabled={loading}
      className={`px-8 py-4 text-lg font-bold rounded-full shadow-lg transition ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700 text-white"
      }`}
    >
      {loading ? "Sending..." : "🚨 Send Emergency Alert"}
    </button>
  );
};

export default AlertButton;
