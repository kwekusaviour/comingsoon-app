// import React from "react";
import Tweeter from "../../assets/images/tweeter-icon.png";
import Facebook from "../../assets/images/facebook-icon.png";
import Google from "../../assets/images/gmail-icon.png";
import Instagram from "../../assets/images/instagram-icon.png";
import Venmo from "../../assets/images/vimeo-icon.png";
const Icon = () => {
  return (
    <div className="flex space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-16 items-center justify-center">
      <img src={Tweeter} className="h-6 sm:h-7 md:h-8" alt="tweet" />
      <img src={Facebook} className="h-5 sm:h-5" alt="fb" />
      <img src={Google} className="h-6 sm:h-7 md:h-8" alt="G+" />
      <img src={Instagram} className="h-6 sm:h-7 md:h-8" alt="IG" />
      <img src={Venmo} className="h-3.5 sm:h-4 md:h-5" alt="Vm" />
    </div>
  );
};

export default Icon;
