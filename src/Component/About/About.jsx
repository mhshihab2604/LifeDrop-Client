import React from 'react';
import { Heart, Users, HandHeart } from 'lucide-react'; // optional: install lucide-react icons
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <div>
      <Helmet>
          <title>About</title>
      </Helmet>

      <section className="bg-gradient-to-br from-red-100 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#6A0B37]">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-6">
              We're a passionate community connecting blood donors with patients in need. By simplifying the donation process and spreading awareness, we aim to build a stronger, healthier future—one drop at a time.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Heart className="text-[#6A0B37] w-6 h-6" />
                <span className="text-gray-600">Save lives by donating safe, accessible blood.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="text-[#6A0B37] w-6 h-6" />
                <span className="text-gray-600">Join a trusted network of donors and hospitals.</span>
              </li>
              <li className="flex items-start gap-3">
                <HandHeart className="text-[#6A0B37] w-6 h-6" />
                <span className="text-gray-600">Support communities during emergencies and crises.</span>
              </li>
            </ul>
          </div>

          {/* Visual / Highlight Card */}
          <div className="bg-white shadow-xl rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#6A0B37]">Why It Matters</h3>
            <p className="text-gray-600 mb-6">
              Every two seconds, someone needs blood. Just one donation can save multiple lives. Be a hero — donate today.
            </p>
            <button className="bg-[#6A0B37] text-white px-6 py-3 rounded-full hover:bg-[#6A0B37] transition">
              Become a Donor
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center pt-20">
          <h3 className="text-3xl font-bold mb-4">
            A Community Built on Compassion
          </h3>
          <p className="text-gray-700 text-lg mb-10">
            Behind every donation is a story, a life saved, and a family grateful. Our mission is not just about giving blood—it's about giving hope.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Transparency</h4>
              <p className="text-gray-600 text-sm">We ensure every donation is traceable, accountable, and used with integrity.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Safety First</h4>
              <p className="text-gray-600 text-sm">Our partners follow strict medical protocols to protect both donors and recipients.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-2">Community</h4>
              <p className="text-gray-600 text-sm">We grow stronger together—connecting people through a shared purpose of saving lives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

