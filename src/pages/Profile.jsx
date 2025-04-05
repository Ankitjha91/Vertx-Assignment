import React from "react";
import { FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";
import { MoreVertical } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Top Navbar - Responsive */}
      <div className="relative flex items-center justify-between px-4 py-3 border-b border-[#1d1d1d]">
        {/* Left: Profile Pic */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Center: Logo - Absolute centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2784/2784460.png"
            alt="Logo"
            className="w-6 h-6"
          />
        </div>

        {/* Right: More Icon */}
        <MoreVertical className="text-white w-5 h-5" />
      </div>

      {/* Tabs - Scrollable if needed */}
      <div className="flex items-center justify-around gap-4 px-4 py-2 text-sm border-b border-[#1d1d1d] overflow-x-auto whitespace-nowrap">
        <span className="text-white border-b-2 border-white pb-1">Overview</span>
        <span className="text-gray-500 hover:text-white transition">Portfolio</span>
        <span className="text-gray-500 hover:text-white transition">Experience</span>
        <span className="text-gray-500 hover:text-white transition">Media</span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold my-6 px-4">Overview</h1>

      {/* Profile Card */}
      <div className="bg-[#111] p-4 rounded-lg border border-[#1d1d1d] mx-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-[64px] h-[64px] bg-white rounded-full" />

          <div>
            <h2 className="text-xl font-semibold">
              Mr A <span className="text-blue-500">✔</span>
            </h2>
            <p className="text-sm text-gray-300">Co-Founder & CEO @Vertx</p>
            <span className="text-xs bg-white text-black rounded px-2 py-0.5 mt-1 inline-block">
              Entrepreneur
            </span>

            <div className="flex justify-center sm:justify-start gap-4 mt-3">
              <FaLinkedin className="text-blue-500" />
              <FaTimes className="text-white" />
              <FaEnvelope className="text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 pb-6">
        {/* Founded Companies */}
        <div className="border border-[#1d1d1d] rounded-lg p-5 bg-[#111]">
          <h3 className="text-lg font-semibold mb-2">Founded Companies</h3>
          <p className="text-3xl font-bold mb-4">02</p>

          <div className="mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded" />
              <div>
                <p className="font-semibold">
                  Vertx{" "}
                  <span className="bg-green-600 text-xs px-2 py-0.5 rounded ml-1">
                    CEO
                  </span>
                </p>
                <p className="text-sm text-gray-400">
                  Founded in 2025, in Fintech.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded" />
              <div>
                <p className="font-semibold">
                  Company{" "}
                  <span className="bg-blue-600 text-xs px-2 py-0.5 rounded ml-1">
                    PROPRIETOR
                  </span>
                </p>
                <p className="text-sm text-gray-400">
                  Details/information like acquired / exit / m&a
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="border border-[#1d1d1d] rounded-lg p-5 bg-[#111]">
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <p className="text-3xl font-bold mb-4">03</p>

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded" />
                <p>Company {item}</p>
              </div>
              <button className="text-sm text-gray-300 underline">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
