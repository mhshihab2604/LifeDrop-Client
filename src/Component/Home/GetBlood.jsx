import { Pencil } from "lucide-react";

const GetBlood = () => {
  return (
    <section className="py-12 text-center relative mt-20">
      <h2 className="text-2xl font-bold mb-12">How to get Blood?</h2>

      <div className="relative flex flex-col items-center mt-20">
        {/* Step 1 at the top center */}
        <div className="relative bg-white shadow-lg rounded-full p-8 w-64 mb-16 z-10 border-2 border-[#6A0B37]">
          <div className="absolute -top-5 -left-5 bg-white border-4 border-black w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
          <Pencil className="w-8 h-8 mx-auto mb-4" />
          <p className="text-sm text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Step 2 and Step 3 bottom corners */}
        <div className="flex justify-between w-full max-w-4xl px-4 relative">
          {/* Step 2 - bottom left */}
          <div className="relative bg-white shadow-lg rounded-full p-8 w-64 border-2 border-[#6A0B37]">
            <div className="absolute -top-5 -left-5 bg-white border-4 border-black w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
            <Pencil className="w-8 h-8 mx-auto mb-4" />
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Heart with pulse line */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              viewBox="0 0 500 100"
              className="w-64 h-20 text-pink-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                d="M0,50 C50,90 100,10 150,50 S250,90 300,50 S400,10 450,50"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 bg-pink-700 rounded-full" />
            </div>
          </div>

          {/* Step 3 - bottom right */}
          <div className="relative bg-white shadow-lg rounded-full p-8 w-64 border-2 border-[#6A0B37]">
            <div className="absolute -top-5 -left-5 bg-white border-4 border-black w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
            <Pencil className="w-8 h-8 mx-auto mb-4" />
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetBlood;
