import React from "react";

const tips = [
  "Always share your live location with a trusted contact when traveling alone.",
  "Trust your instincts — if you feel unsafe, leave the situation immediately.",
  "Avoid dark, isolated areas whenever possible.",
  "Carry a small safety device like pepper spray or a personal alarm.",
  "Learn and practice basic self-defense moves.",
  "Stay alert and aware of your surroundings — avoid distractions like mobile phones.",
];

const videos = [
  {
    title: "Basic Self-Defense Techniques",
    url: "https://www.youtube.com/embed/3n4w2X2Zot0", // example YouTube embed
  },
  {
    title: "How to Escape from Grabs",
    url: "https://www.youtube.com/embed/5FLEe1V_1MQ",
  },
];

const Learn = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50 p-8 space-y-10">
      <h2 className="text-3xl font-bold text-green-700">Learn Safety & Defense</h2>

      {/* Safety Tips Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg p-6 shadow-md space-y-4">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">🛡️ Safety Tips</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Self-Defense Videos Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg p-6 shadow-md space-y-6">
        <h3 className="text-2xl font-semibold text-green-600 mb-4">🎥 Self-Defense Videos</h3>
        {videos.map((video, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-semibold">{video.title}</h4>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-md"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
