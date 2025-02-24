import { useState } from "react";
import "./PlaceHolder.css";
function PlaceHolder() {
  const [email, setEmail] = useState("");
  return (
    <div className="Input-form">
      <b></b>

      <form>
        <input
          className="overlay"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="YOUR EMAIL"
        />
        <button className="Sub-button">SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default PlaceHolder;
