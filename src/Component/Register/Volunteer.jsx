import React from 'react';
import { Link } from 'react-router-dom';
const Volunteer = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 mb-10">
      <h2 className="text-3xl font-extrabold text-center text-[#6A0B37] mb-4">Register</h2>

      <div className="flex justify-center mb-6 space-x-4">
        <Link to="/register"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Donor</button></Link>
        <Link to="/volunteer"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Volunteer</button></Link>
        <Link to="/organization"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Organization</button></Link>
      </div>

      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="input" />
          <select className="input">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input type="date" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />
        </div>

        <input type="email" placeholder="Email" className="input w-full" />
        <input type="text" placeholder="Present Address" className="input w-full" />
        <input type="text" placeholder="Area of Interest (e.g. Campaign, Tech Support)" className="input w-full" />
        <input type="text" placeholder="Skills (Optional)" className="input w-full" />
        <select className="input w-full">
          <option>Availability</option>
          <option>Weekdays</option>
          <option>Weekends</option>
          <option>Flexible</option>
        </select>

        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-4 w-4 text-red-600" />
          <label className="text-sm text-gray-700">I agree to the terms & conditions</label>
        </div>

        <button className="w-full bg-[#6A0B37] text-white py-2 rounded-md font-semibold hover:bg-red-700">
          Register as Volunteer
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
