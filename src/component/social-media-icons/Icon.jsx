// import React from "react";
import "./Icon.css";
import Tweeter from "../../assets/images/tweeter-icon.png";
import Facebook from "../../assets/images/facebook-icon.png";
import Google from "../../assets/images/gmail-icon.png";
import Instagram from "../../assets/images/instagram-icon.png";
import Venmo from "../../assets/images/vimeo-icon.png";
const Icon = () => {
  return (
    <div className="icons">
      <img src={Tweeter} className="tweet" alt="" height={28} />
      <img src={Facebook} className="fb" alt="" height={20} />
      <img src={Google} className="G+" alt="" height={28} />
      <img src={Instagram} className="IG" alt="" height={27} />
      <img src={Venmo} className="Vm" alt="" height={18} />
    </div>
  );
};

export default Icon;
