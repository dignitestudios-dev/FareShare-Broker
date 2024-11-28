import React, { useContext, useState } from "react";
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
import { RideBookingContext } from "../../../context/RideBookingContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

const SchdeuleForLater = () => {
  const {
    handleSubmit,
    setScheduledDate,
    openConfirm,
    setOpenConfirm,
    rideLoading,
  } = useContext(RideBookingContext);
  const { navigate } = useContext(AppContext);
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

  // Helper function to combine date and time into an ISO string
  const getScheduledDate = () => {
    if (date && time) {
      const dateTime = new Date(date);
      const [hours, minutes] = time.split(":");
      dateTime.setHours(hours, minutes);
      return dateTime.toISOString();
    }
    return null;
  };

  useEffect(() => {
    if (date && time) {
      setScheduledDate(getScheduledDate());
    }
  }, [date, time]);

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
          onClick={(e) => handleSubmit(e)}
          className="w-full h-12 rounded-full bg-[#c00000] text-white flex justify-center gap-2 items-center text-lg font-medium"
        >
          {rideLoading && (
            <div
              class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
              role="status"
              aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>
          )}
          Confirm date and time
        </button>
      </div>
      {openConfirm && (
        <RideConfirmedModal isOpen={openConfirm} setIsOpen={setOpenConfirm} />
      )}
    </div>
  );
};

export default SchdeuleForLater;
