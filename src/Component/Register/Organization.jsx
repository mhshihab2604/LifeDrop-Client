import React from 'react';
import { Link } from 'react-router-dom';

const Organization = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10  mb-10">
      <h2 className="text-3xl font-bold text-center text-[#6A0B37] mb-4">Register</h2>

      <div className="flex justify-center mb-6 space-x-4">
        <Link to="/register"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Donor</button></Link>
        <Link to="/volunteer"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Volunteer</button></Link>
        <Link to="/organization"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Organization</button></Link>
      </div>

      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Organization Name" className="input" />
          <input type="text" placeholder="Type (e.g. Hospital, NGO, etc.)" className="input" />
          <input type="text" placeholder="License / ID No" className="input" />
          <input type="date" className="input" />
        </div>

        <input type="text" placeholder="Website (optional)" className="input w-full" />

        <div className="grid md:grid-cols-2 gap-4">
          <select className="input">
            <option>Select Division</option>
          </select>
          <select className="input">
            <option>Select District</option>
          </select>
        </div>

        <input type="text" placeholder="Full Address" className="input w-full" />

        <div className="grid md:grid-cols-2 gap-4">
          <input type="email" placeholder="Email Address" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />
          <input type="text" placeholder="Contact Person Name" className="input" />
          <input type="text" placeholder="Designation" className="input" />
        </div>

        <button className="w-full bg-[#6A0B37] text-white py-2 rounded-md font-semibold hover:bg-gray-700">
          Register Organization
        </button>
      </form>
    </div>
  );
};

export default Organization;
