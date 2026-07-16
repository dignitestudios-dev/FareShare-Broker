import React, { useContext, useState } from "react";
import { Application, Card, Calendar, DatePicker, TimePicker } from "react-rainbow-components";
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
    setIsScheduled

  } = useContext(RideBookingContext);
  const { navigate } = useContext(AppContext);
  const today = moment();
  const todayString = today.format("YYYY-MM-DD");
  const theme = {
    rainbow: {
      palette: {
        brand: "#c00000",
      },
    },
  };

  const [date, setDate] = useState(today.toDate());
  const [time, setTime] = useState("");

  const getScheduledDate = () => {
    if (!date || !time) {
      return null;
    }

    const selectedDate = moment(date);
    const [hours, minutes] = time.split(":").map(Number);
    selectedDate.set({ hour: hours, minute: minutes, second: 0, millisecond: 0 });

    return selectedDate.toISOString();
  };

  useEffect(() => {
    if (date && time) {
      setScheduledDate(getScheduledDate());
    }
  }, [date, time]);

  return (
    <div className="w-full h-auto flex flex-col p-4 justify-start items-start gap-4">
      <div className="w-full rounded-lg border border-[#c00000]/20 bg-[#c00000]/5 px-3 py-2 text-sm text-[#c00000]">
        Local preview: use this screen to test the date and time picker directly in the browser.
      </div>
      <button
        className=" text-lg  text-[#c00000] font-medium flex gap-1 justify-start items-center"
        onClick={() => {
          setIsScheduled(false)
          navigate(-1)
        }}
      >
        <IoChevronBack />
        <span>Back to Home</span>
      </button>

      <div className="w-full xl:w-2/3 flex flex-col gap-8 h-auto p-4">
        <div className="flex flex-col gap-4 w-full h-auto">
          <Application theme={theme} className="w-full flex flex-col gap-4">
            <Card className="w-full rounded-xl border border-gray-200 p-4 bg-white">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Select date
              </label>
              <div className="rainbow-datepicker-wrapper w-full">
                <DatePicker
                  value={date}
                  min={today.toDate()}
                  onChange={(value) => setDate(value)}
                  className="w-full"
                  locale="en-US"
                  formatStyle="large"
                />
              </div>
            </Card>

            <Card className="w-full rounded-xl border border-gray-200 p-4 bg-white">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Select time
              </label>
              <TimePicker
                value={time}
                onChange={(value) => setTime(value)}
                className="w-full"
                borderRadius="semi-rounded"
              />
            </Card>
          </Application>
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
