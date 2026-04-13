"use client";
import React, { useEffect, useState } from "react";

import { TiLocationArrow } from "react-icons/ti";

const Watch = () => {
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
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
    <div>
      <div className="w-[300px] h-[300px] p-1 rounded-full border border-amber-600 dark:bg-white shadow-2xl  dark:border-white bg-black ">
        <div className="h-full w-full text-2xl  rounded-full   flex relative justify-center items-center">
          <div className="relative  h-[90%] flex justify-center items-center rounded-full ">
            {numbers.map((num) => (
              <div
                key={num}
                className={`absolute dark:text-gray-800 text-gray-200  top-[45%]   num % 5 === 0 ? "w-[3px] bg-gray-800" : "w-[1px] h-[6px] bg-gray-400"
                }`}
                style={{
                  transform: `
          rotate(${num * 30}deg)
          translateY(-130px)
          rotate(-${num * 30}deg)
        `,
                }}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="relative gap-2 bg-red-500  h-[80%] mt-3 flex justify-center items-center rounded-full ">
            {seconds.map((num) => (
              <div
                key={num}
                className={`absolute  ${
                  num % 5 === 0
                    ? "w-[3px] h-[12px] bg-gray-800 dark:bg-gray-400"
                    : "w-px h-[6px] bg-gray-400 dark:bg-black"
                }  text-gray-800 bg-gray-200 text-[10px] top-[45%]`}
                style={{
                  transform: `
          rotate(${num * 6}deg)
          translateY(-100px)
     
        `,
                }}
              ></div>
            ))}
          </div>
          {/* <div className="relative w-full h-full"> */}
          {/* <span className="relative bottom-2">.</span> */}
          <div
            style={{ transform: `rotate(${time.minute * 6 - 90}deg)` }}
            className="w-[65%] flex justify-end absolute h-1 bg-[linear-gradient(to_left,gray_50%,transparent_50%)]"
          >
            <span className="relative left-[21px] text-gray-200 z-2 -top-[7px] rotate-44 dark:text-black bottom-[2px]">
              <TiLocationArrow />
            </span>
          </div>

          <span className="text-[20px] bg-gray-200 absolute dark:bg-black h-[20px] w-[20px] rounded-full  z-2"></span>

          <div
            style={{
              transform: `rotate(${time.hour * 30 + time.minute * 0.5 - 90}deg)`,
            }}
            className="w-[50%] flex justify-end transition-all duration-400 absolute h-1 bg-[linear-gradient(to_left,green_50%,transparent_50%)]"
          >
            <span className="relative left-[21px] text-gray-200 z-2 -top-[7px] rotate-44 dark:text-black bottom-[2px]">
              <TiLocationArrow />
            </span>
          </div>
          <div
            style={{ transform: `rotate(${time.second * 6 - 90}deg)` }}
            className="w-[75%]  flex justify-end absolute h-1 dark:bg-[linear-gradient(to_left,black_50%,transparent_50%)] bg-[linear-gradient(to_left,white_50%,transparent_50%)]"
          >
            <span className="relative left-[21px] z-2 text-gray-200 -top-[7px] rotate-44 dark:text-black bottom-[2px]">
              <TiLocationArrow />
            </span>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Watch;
