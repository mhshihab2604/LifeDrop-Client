import React from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { Link } from "react-router-dom";
const FindBlood = () => {
  return (
   <section>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[#6A0B37] mb-2 text-center">Find Blood Donors Near You</h2>
        <p className="text-gray-600 mb-6 text-center">
          In urgent need of blood? Use our powerful search tool to quickly locate available donors and blood banks in your area. <br /> Filter by blood group and location to find the most compatible match fast and save precious time in emergencies.
        </p>
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10 flex flex-col md:flex-row mb-10">
        <div className="hidden md:flex flex-col items-center justify-center px-4 w-1/3 bg-[#6A0B37] text-white rounded-l-2xl">
          <BiSolidDonateBlood className="text-4xl sm:text-7xl text-white" />
          <p className="mt-2 text-lg font-semibold">Emergency Care</p>
          <p className="text-sm text-pink-200 text-center">Fast blood access saves lives.</p>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-2/3 p-4">
          <h2 className="text-2xl font-bold text-center text-[#6A0B37] mb-6">Find Blood</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="Enter your city or hospital"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6A0B37] hover:bg-gray-800 text-white py-2 rounded-lg text-lg font-semibold transition duration-200"
            >
              Search Donors
            </button>
          </form>

          <div className="mt-6 text-center">
          <Link to="/emergency">
            <button
                className="w-full bg-[#B32346] hover:bg-gray-800 text-white py-3 rounded-xl text-lg font-bold uppercase transition duration-200"
              >
                Emergency
              </button>
          </Link>
          </div>
        </div>
      </div>
   </section>
  );
};

export default FindBlood;
