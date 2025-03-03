import { useState } from "react";
function PlaceHolder() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-5">
      <form className=" max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="YOUR EMAIL"
            className="flex-1 p-2 sm:p-3 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300 text-sm md:text-base justify-center items-center"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 sm:px-6 rounded-r-md text-sm md:text-base">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaceHolder;
