import React, { useRef, useState } from "react";
import { Application, DatePicker } from "react-rainbow-components";

const DateFilterModal = ({ isOpen, setIsOpen }) => {
  const initialState = {
    date: new Date("2019-10-25"),
    locale: { name: "en-US", label: "English (US)" },
  };

  const [initialDate, setInitialDate] = useState(initialState.date);
  const [finalDate, setFinalDate] = useState(initialState.date);

  const theme = {
    rainbow: {
      palette: {
        brand: "#c00000",
      },
    },
  };

  const modalRef = useRef();

  const toggleModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      id="date-filter"
      onClick={toggleModal}
      className={`fixed top-0 left-0 z-[1000] ${
        isOpen ? "flex" : "hidden"
      } w-[100vw] h-screen justify-center items-center px-2 md:px-0 bg-[#000]/[0.46]`}
    >
      <div
        ref={modalRef}
        className=" w-[431px] h-[166px] bg-white rounded-3xl flex flex-col items-start justify-center "
      >
        <div className="w-full text-white text-2xl font-medium h-[30%] flex justify-center px-4 items-center rounded-t-3xl bg-[#c00000]">
          Select/Enter Date
        </div>
        <Application
          theme={theme}
          className="w-full h-[50%] px-6 flex gap-4 items-center justify-start"
        >
          <div
            className="w-[48%] h-full flex items-center"
            style={{ width: "48%", height: "50%" }}
          >
            <DatePicker
              value={initialDate}
              minDate={new Date(2018, 0, 4)}
              maxDate={new Date(2020, 0, 4)}
              onChange={(value) => setInitialDate(value)}
              borderRadius="semi-rounded"
              className="w-full h-full"
            />
          </div>

          <div
            className="w-[48%] h-full flex items-center"
            style={{ width: "48%", height: "50%" }}
          >
            <DatePicker
              value={finalDate}
              minDate={new Date(2018, 0, 4)}
              maxDate={new Date(2020, 0, 4)}
              onChange={(value) => setFinalDate(value)}
              borderRadius="semi-rounded"
              className="w-full h-full"
            />
          </div>
        </Application>
        <div className="w-full h-[20%] flex items-center justify-end gap-4 mb-2 px-4">
          <button className="bg-[#000]/[0.7] w-14 rounded-full h-8 flex items-center justify-center text-[#fff] text-md font-semibold">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateFilterModal;
