import { Link } from "react-router-dom";
import { BiSolidDonateBlood } from "react-icons/bi";
const Header = () => {
    return (
        <div>
            <header className="p-4 dark:text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <BiSolidDonateBlood className="text-7xl text-[#6A0B37]"></BiSolidDonateBlood>
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <Link to="/" className="flex">
                            <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#B32346] dark:border-[#6A0B37] font-bold">Home</a>
                        </Link>
                        <Link to="" className="flex">
                            <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#B32346] dark:border-[#6A0B37] font-bold">About Us</a>
                        </Link>
                        <Link to="" className="flex">
                            <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#B32346] dark:border-[#6A0B37] font-bold">Find Blood</a>
                        </Link>
                        <Link to="" className="flex">
                            <a rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border- hover:dark:text-[#B32346] dark:border-[#6A0B37] font-bold">Register Now</a>
                        </Link>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <button className="self-center px-8 py-3 font-semibold rounded dark:bg-[#6A0B37] dark:text-gray-50">Login</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;