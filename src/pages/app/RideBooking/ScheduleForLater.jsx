import React, { useState } from "react";
import {
  Card,
  Calendar,
  Application,
  TimePicker,
  DatePicker,
} from "react-rainbow-components";
import { IoChevronBack } from "react-icons/io5";
import { useEffect } from "react";
import moment from "moment";
import RideConfirmedModal from "../../../components/app/ride/RideConfirmedModal";

const SchdeuleForLater = () => {
  const today = moment();
  const theme = {
    rainbow: {
      palette: {
        brand: "#c00000",
      },
    },
  };

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();

  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <div className="w-full h-auto flex flex-col p-4  justify-start items-start gap-4">
      <button
        className=" text-lg  text-[#c00000] font-medium flex gap-1 justify-start items-center"
        onClick={() => navigate("Home", "/home")}
      >
        <IoChevronBack />
        <span>Back to Home</span>
      </button>

      <div className="w-full xl:w-2/3 flex flex-col gap-8 h-auto p-4">
        <div className="flex flex-col gap-1 w-full h-auto">
          <Application
            theme={theme}
            className="w-full h-[40%]  flex gap-4 flex-col items-center justify-start"
          >
            <Card className="rainbow-p-around_large w-full">
              <Calendar
                id="calendar-1"
                value={date}
                minDate={today.toDate()}
                onChange={(value) => setDate(value)}
              />
            </Card>
            <TimePicker
              value={time}
              onChange={(time) => setTime(time)}
              className="rainbow-m-vertical_x-large  rainbow-m_auto "
              borderRadius="semi-rounded"
            />
          </Application>

          {/* <Application
            theme={theme}
            className="w-full h-[40%]  flex flex-col items-center justify-start"
          >
            
          </Application> */}
          {/* 
          <Application
            theme={theme}
            className="w-full h-[40%] flex gap-4 items-center justify-start"
          >
            <div
              className="w-[49%] h-full flex items-center"
              style={{ width: "49%", height: "50%" }}
            >
              <DatePicker
                value={date}
                borderRadius="semi-rounded"
                className="w-full h-full"
                disabled
              />
            </div>

            <div
              className="w-[49%] h-full flex items-center"
              style={{ width: "49%", height: "50%" }}
            >
              <TimePicker
                value={time}
                borderRadius="semi-rounded"
                className="w-full h-full"
                disabled
              />
            </div>
          </Application> */}
        </div>
        <button
          onClick={() => setOpenConfirm(true)}
          className="w-full h-12 rounded-full bg-[#c00000] text-white flex justify-center items-center text-lg font-medium"
        >
          Confirm date and time
        </button>
      </div>
      <RideConfirmedModal isOpen={openConfirm} setIsOpen={setOpenConfirm} />
    </div>
  );
};

export default SchdeuleForLater;
