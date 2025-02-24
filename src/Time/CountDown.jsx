import React, { useEffect, useState } from "react";
import "./CountDown.css";
const Countdown = ({ endDate }) => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  console.log(endDate);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const endTime = typeof endDate === "number" ? endDate : endDate.getTime();
      const duration = endTime - now;

      if (duration < 0) {
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(
        Math.floor(duration / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((duration % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <React.Fragment>
      <div className="countdown-wrapper">
        <div className="countdown-value">
          <h1>
            {countdown.days}
            <p className="d">{Number(countdown.days) > 1 ? "DAYS" : "DAY"}</p>
          </h1>
        </div>

        <div className="countdown-value">
          <h1>
            {countdown.hours}
            <p className="h">
              {Number(countdown.hours) > 1 ? "HOURS" : "HOUR"}
            </p>
          </h1>
        </div>

        <div className="countdown-value">
          <h1>
            {countdown.minutes}
            <p className="m">
              {Number(countdown.minutes) > 1 ? "MINUTES" : "MINUTE"}
            </p>
          </h1>
        </div>

        <div className="countdown-value">
          <h1>
            {countdown.seconds}
            <p className="s">
              {Number(countdown.seconds) > 1 ? "SECONDS" : "SECOND"}
            </p>
          </h1>
        </div>
      </div>

      <div className="notification">NOTIFY ME WHEN IT IS READY</div>
    </React.Fragment>
  );
};

export default Countdown;
