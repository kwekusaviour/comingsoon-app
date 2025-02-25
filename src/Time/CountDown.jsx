import React, { useEffect, useState } from "react";
const Countdown = ({ endDate }) => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  // console.log(endDate);
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
      <div className="flex justify-center gap-30 mt-0 text-white">
        <div>
          <h1 className=" text-4xl font-bold">
            {countdown.days}
            <p className="text-sm mt-1">
              {Number(countdown.days) > 1 ? "DAYS" : "DAY"}
            </p>
          </h1>
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {countdown.hours}
            <p className="text-sm mt-1">
              {Number(countdown.hours) > 1 ? "HOURS" : "HOUR"}
            </p>
          </h1>
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {countdown.minutes}
            <p className="text-sm mt-1">
              {Number(countdown.minutes) > 1 ? "MINUTES" : "MINUTE"}
            </p>
          </h1>
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {countdown.seconds}
            <p className="text-sm mt-1">
              {Number(countdown.seconds) > 1 ? "SECONDS" : "SECOND"}
            </p>
          </h1>
        </div>
      </div>

      <div className=" flex justify-center mt-5 text-white font-bold py-1  ">
        NOTIFY ME WHEN IT IS READY
      </div>
    </React.Fragment>
  );
};

export default Countdown;
