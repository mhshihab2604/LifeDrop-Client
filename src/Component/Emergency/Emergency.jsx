import React from 'react';

const Emergency = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-center text-[#6A0B37] mb-2">Welcome</h2>
      <h1 className="text-3xl font-extrabold text-center text-[#6A0B37] mb-6">Emergency Blood Portal</h1>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Patient Full Name" className="input" />
          <input type="number" placeholder="Age" className="input" />
          <select className="input">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <select className="input">
            <option>Blood Group</option>
            <option>A+</option>
            <option>B+</option>
            <option>AB+</option>
            <option>O+</option>
            <option>A-</option>
            <option>B-</option>
            <option>AB-</option>
            <option>O-</option>
          </select>
          <input type="number" placeholder="Number of Bags Needed" className="input" />
          <input type="datetime-local" className="input" />
          <input type="text" placeholder="Hospital Name" className="input" />
          <input type="text" placeholder="Hospital Address" className="input" />
          <input type="text" placeholder="Doctor's Name (optional)" className="input col-span-2" />
          <select className="input col-span-2">
            <option>Emergency Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <h3 className="font-bold text-lg mt-6">Requester Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Full Name" className="input" />
          <input type="text" placeholder="Relationship to Patient" className="input" />
          <input type="tel" placeholder="Phone Number" className="input" />
          <input type="email" placeholder="Email (optional)" className="input" />
        </div>

        <button
          type="submit"
          className="w-full bg-[#6A0B37] text-white py-2 rounded-md hover:bg-gray-700 font-semibold"
        >
          Submit Emergency Request
        </button>
      </form>
    </div>
  );
};

export default Emergency;
