import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../AuthContext/AuthContext';

const Register = () => {

  const{createUser}=useContext(AuthContext);
  const handleRegister = e => {
    e.preventDefault();
    const from =e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log("email:",email, "password:",password
    )

    createUser(email,password)
    .then(result => {
      const user=result.user;
      console.log(user)
    })
    .catch (error=>{
      console.error(error.message)
    })
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10 mb-10">
        <h2 className="text-3xl font-extrabold text-center text-[#6A0B37] mb-4">Register</h2>

      <div className="flex justify-center mb-6 space-x-4">
        <Link to="/register"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Donor</button></Link>
        <Link to="/volunteer"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Volunteer</button></Link>
        <Link to="/organization"><button className="bg-[#6A0B37] text-white px-4 py-1 rounded-full font-semibold">Organization</button></Link>
      </div>

      <form onSubmit={handleRegister} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="text" placeholder="Gender" className="input" />
          <input type="date" className="input" />
          <input type="number" placeholder="Weight (kg)" className="input" />
          <select className="input">
            <option>Select Blood Group</option>
            <option>A+</option><option>B+</option><option>O+</option><option>AB+</option>
            <option>A-</option><option>B-</option><option>O-</option><option>AB-</option>
          </select>
          <input type="text" placeholder="Identity Number" className="input" />
          <input type="email" name='email' placeholder="Email" className="input" />
          <input type="tel" placeholder="Mobile Number" className="input" />
          <input type="password" name="password" id="" placeholder='Entet Your Password' className="input "/>
          <select className="input">
            <option>Select Division</option>
          </select>
          <select className="input">
            <option>Select District</option>
          </select>
        
          <input type="text" placeholder="Detailed Address" className="input col-span-2" />
          <input type="text" placeholder="Emergency Contact Name" className="input" />
          <input type="tel" placeholder="Emergency Contact Number" className="input" />
        </div>

        <button className="w-full bg-[#6A0B37] text-white py-2 rounded-md font-semibold hover:bg-gray-700">
          Register as Donor
        </button>
      </form>
    </div>
  );
};

export default Register;
