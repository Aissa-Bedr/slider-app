import React, { FC, useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Flex from "./build/Flex";
import { CgArrowRight, CgArrowLeft } from "react-icons/cg";

type ChangeIndexType = "increase" | "decrease";

enum Lengths {
  MIN_LENGTH = 1,
  MAX_LENGTH = 3,
}

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    JSON.parse(`${localStorage.getItem("currentIndex")}`) || 1
  );

  useEffect(() => {
    localStorage.setItem("currentIndex", JSON.stringify(currentIndex));
  }, [currentIndex]);

  function changeIndex(index: number, changeIndexType: ChangeIndexType): void {
    if (changeIndexType === "increase") {
      setCurrentIndex((prevState) =>
        index < Lengths.MAX_LENGTH ? prevState + 1 : 1
      );
      return;
    }

    setCurrentIndex((prevState) =>
      index > Lengths.MIN_LENGTH ? prevState - 1 : 3
    );
  }

  return (
    <div>
      <Flex
        className="items-center justify-between"
        direction="flex-row"
        gap="gap-2"
      >
        <div
          onClick={() => changeIndex(currentIndex, "decrease")}
          className="p-2 bg-purple-300 text-white cursor-pointer"
        >
          <CgArrowLeft />
        </div>
        <div>
          {currentIndex === 1 && <img src="/js.jpg" alt="" />}
          {currentIndex === 2 && <img src="/nissan-gtr.jpg" alt="" />}
          {currentIndex === 3 && <img src="/react.js.png" alt="" />}
        </div>
        <div
          onClick={() => changeIndex(currentIndex, "increase")}
          className="p-2 bg-purple-300 text-white cursor-pointer"
        >
          <CgArrowRight />
        </div>
      </Flex>
      <Flex
        className="items-center justify-center mt-2"
        direction="flex-row"
        gap="gap-2"
      >
        <div
          onClick={() => setCurrentIndex(1)}
          className={`w-3 h-3 ${
            currentIndex === 1
              ? "current_index bg-purple-300"
              : "not_current_index bg-white"
          } cursor-pointer`}
        ></div>
        <div
          onClick={() => setCurrentIndex(2)}
          className={`w-3 h-3 ${
            currentIndex === 2
              ? "current_index bg-purple-300"
              : "not_current_index bg-white"
          } cursor-pointer`}
        ></div>
        <div
          onClick={() => setCurrentIndex(3)}
          className={`w-3 h-3 ${
            currentIndex === 3
              ? "current_index bg-purple-300"
              : "not_current_index bg-white"
          } cursor-pointer`}
        ></div>
      </Flex>
    </div>
  );
};

export default App;
