// import React from "react";
import "./Icon.css";
import Tweeter from "../../assets/images/tweeter-icon.png";
import Facebook from "../../assets/images/facebook-icon.png";
import Google from "../../assets/images/gmail-icon.png";
import Instagram from "../../assets/images/instagram-icon.png";
import Venmo from "../../assets/images/vimeo-icon.png";
const Icon = () => {
  return (
    <div className="flex space-x-10 items-center justify-center">
      <img src={Tweeter} className="h-7" alt="tweet" />
      <img src={Facebook} className="h-5" alt="fb" />
      <img src={Google} className="h-7" alt="G+" />
      <img src={Instagram} className="h-7" alt="IG" />
      <img src={Venmo} className="h-4.5" alt="Vm" />
    </div>
  );
};

export default Icon;
