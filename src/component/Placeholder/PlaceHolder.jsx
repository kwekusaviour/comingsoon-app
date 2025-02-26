import { useState } from "react";
function PlaceHolder() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <form className=" max-w-md">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="YOUR EMAIL"
          className="flex-1 p-3 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300 text-sm md:text-base justify-center items-center"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-md text-sm md:text-base">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default PlaceHolder;
