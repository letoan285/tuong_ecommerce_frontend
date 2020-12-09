import React, { useState, useRef, useEffect } from "react";

const CountDown = () => {
  const [timerDays, setTimeDays] = useState<any>("00");
  const [timerHours, setTimeHours] = useState<any>("00");
  const [timerMinutes, setTimMinutes] = useState<any>("00");
  const [timerSeconds, setTimeSeconds] = useState<any>("00");

  let interval: any = useRef();

  const startTimer = () => {
    const countdownDate = new Date("December 31, 2020 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
        //stop our timer
      } else {
        //update timer
        setTimeDays(days);
        setTimeHours(hours);
        setTimMinutes(minutes);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon mercado-countdown"></span>
          {/* <h2>Countdown Timer</h2> */}
          {/* <p>Countdown for Sale</p> */}
        </div>

        <div>
          <section className="timedetails">
            <p>{timerDays}</p>
            <p>:</p>
            <p>
              <small> Days</small>
            </p>
          </section>

          <section className="timedetails">
            <p>{timerHours}</p>
            <p>:</p>
            <p>
              <small> Hours</small>
            </p>
          </section>

          <section className="timedetails">
            <p>{timerMinutes}</p>
            <p>:</p>
            <p>
              <small> Mins</small>
            </p>
          </section>

          <section className="timedetails">
            <p>{timerSeconds}</p>
            <p>:</p>
            <p>
              <small> Secs</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default CountDown;
