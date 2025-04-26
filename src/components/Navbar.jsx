import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">SHEsafe</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/emergency" className="hover:underline">Emergency</Link>
        <Link to="/report" className="hover:underline">Report</Link>
        <Link to="/learn" className="hover:underline">Learn</Link>
      </div>
    </nav>
  );
};

export default Navbar;
