// import "./index.css";
import Background from "./component/Background/background";
import Hero from "./component/Placeholder/PlaceHolder";
import Selinelogo1 from "./assets/images/seline-logo1.png";
import BackgroundImage from "./assets/images/background-image.jpg";
import CountDown from "./Time/countdown";
import Icon from "./component/social-media-icons/icon";

const App = () => {
  const endDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
  return (
    <div>
      <div>HELLO WORLD</div>
      <div className="logo">
        <img src={Selinelogo1} id="logo" alt="LOGO" />
      </div>
      <div className="overlay"></div>

      <img src={BackgroundImage} className="background" alt="" />
      <Background />
      <CountDown endDate={endDate} />
      <Hero />
      <Icon />
    </div>
  );
};

export default App;
