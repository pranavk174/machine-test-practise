"use client";
import React, { useEffect, useState } from "react";
import { clearInterval } from "timers";

const Watch = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setTime({
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const seconds = Array.from({ length: 60 }, (_, i) => i + 1);
  console.log(time.second, "time", time);
  return (
    <div className="flex justify-center w-full items-center h-screen bg-gray-100">
      <div className="w-[320px] h-[320px] p-2 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-2xl border-[6px] border-gray-300">
        <div className="relative w-full h-full rounded-full flex justify-center items-center">
          {/* Numbers */}
          {numbers.map((num) => (
            <div
              key={num}
              className="absolute text-gray-800 font-semibold"
              style={{
                transform: `
              rotate(${num * 30}deg)
              translateY(-110px)
              rotate(-${num * 30}deg)
            `,
              }}
            >
              {num}
            </div>
          ))}
          {/* Minute ticks */}
          {seconds.map((num) => (
            <div
              key={num}
              className={`absolute ${
                num % 5 === 0
                  ? "w-[3px] h-[12px] bg-gray-800"
                  : "w-px h-[6px] bg-gray-400"
              }`}
              style={{
                transform: `
              rotate(${num * 6}deg)
              translateY(-145px)
            `,
              }}
            />
          ))}
          {/* Hour hand */}
          <div
            style={{ transform: `rotate(${time.minute * 6 - 90}deg)` }}
            className="w-[80%] absolute h-1 bg-[linear-gradient(to_left,gray_50%,transparent_50%)]"
          ></div>{" "}
          <div
            style={{
              transform: `rotate(${time.hour * 30 + time.minute * 0.5 - 90}deg)`,
            }}
            className="w-[60%] transition-all duration-400 absolute h-1 bg-[linear-gradient(to_left,green_50%,transparent_50%)]"
          ></div>{" "}
          <div
            style={{ transform: `rotate(${time.second * 6 - 90}deg) ` }}
            className="w-[90%] absolute h-1 bg-[linear-gradient(to_left,yellow_50%,transparent_50%)]"
          ></div>
          {/* Center dot */}
          <div className="w-4 h-4 bg-black rounded-full absolute z-10 shadow-md" />
          {/* Inner circle (depth) */}
          <div className="absolute w-[90%] h-[90%] rounded-full border border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Watch;
