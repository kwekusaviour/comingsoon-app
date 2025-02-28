import Selinelogo1 from "./assets/images/seline-logo1.png";
import BackgroundImage from "./assets/images/background-image.jpg";
import CountDown from "./Time/countdown";
import Icon from "./component/social-media-icons/icon";
import Hero from "./component/Placeholder/PlaceHolder";
import Background from "./component/Background/background";

const App = () => {
  const endDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
  return (
    <div>
      <div className="flex justify-center items-center relative z-10">
        <img src={Selinelogo1} className=" h-32 sm:h-40 md:h-50" alt="LOGO" />
      </div>
      <div className="overlay fixed inset-0 bg-black opacity-50 z-5"></div>
      <div
        className=" fixed inset-0  bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className="relative z-10">
        <Background />
        <CountDown endDate={endDate} />
        <Hero />
        <Icon />
      </div>
    </div>
  );
};

export default App;
