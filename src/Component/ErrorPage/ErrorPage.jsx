import { Link } from "react-router-dom";
import { BiSolidDonateBlood } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 text-center">
      <BiSolidDonateBlood className="text-7xl text-[#6A0B37] mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold text-[#6A0B37] mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-md">
        Oops! It seems you've lost your way — but every drop counts. Let's get you back on track!
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 text-white bg-[#6A0B37] rounded-lg shadow hover:bg-[#B32346] transition"
      >
        🏠 Back to Home
      </Link>

      <div className="mt-10">
        <p className="text-sm text-gray-500">
          If this page should exist, please contact support or try refreshing the page.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
