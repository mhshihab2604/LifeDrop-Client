// const Banner = () => {
//     return (
//         <div>
//             <div className="flex flex-col md:flex-row items-center justify-between min-h-[300px] bg-white">
//                 <div className="w-full md:w-1/2 h-64 bg-gradient-to-b from-[#B32346] to-[#6A0B37] rounded-br-[100%] shadow-lg" />
//                     <div className="w-full md:w-1/2 p-8 text-center md:text-left">
//                         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                         Save Life Donate <br /> <span className="text-gray-900">Blood</span>
//                         </h2>
//                         <p className="text-sm text-gray-600 mb-6">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry...
//                         </p>
//                         <button className="bg-black text-white font-semibold py-2 px-4 rounded shadow hover:bg-gray-800">
//                         Get Blood Now
//                         </button>
//                     </div>
//                 </div>
//         </div>
//     );
// };

// export default Banner;

const Banner = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[350px] bg-white overflow-hidden">
            {/* Left Side Custom SVG Background */}
            <div className="w-full md:w-1/2 h-full">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 700 400"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,0 C300,0 300,400 700,400 L0,400 Z"
                        fill="url(#gradient)"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#B32346" />
                            <stop offset="100%" stopColor="#6A0B37" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Right Side Text */}
            <div className="w-full md:w-1/2 p-6 md:p-12 text-center md:text-left z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Save Life Donate <br />
                    <span className="text-gray-900">Blood</span>
                </h2>
                <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
                </p>
                <button className="bg-black text-white font-semibold py-2 px-6 rounded shadow hover:bg-gray-800 transition">
                    Get Blood Now
                </button>
            </div>
        </div>
    );
};

export default Banner;


