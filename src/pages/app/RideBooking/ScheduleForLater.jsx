import React, { useContext, useState, useEffect, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import moment from 'moment';
import RideConfirmedModal from '../../../components/app/ride/RideConfirmedModal';
import { RideBookingContext } from '../../../context/RideBookingContext';
import CustomTimePicker from '../../../components/app/global/CustomTimePicker';
import { useNavigate } from 'react-router-dom';

const ScheduleForLater = () => {
  const {
    handleSubmit,
    setScheduledDate,
    openConfirm,
    setOpenConfirm,
    rideLoading,
    setIsScheduled,
    setError
  } = useContext(RideBookingContext);

  const navigate = useNavigate();

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);

  // Convert any supported time value to a moment object
  const parseTime = useCallback((value) => {
    if (!value) return null;

    // If CustomTimePicker returns Date
    if (value instanceof Date) {
      return moment(value);
    }

    // If it returns a moment object
    if (moment.isMoment(value)) {
      return value;
    }

    // If it returns a string
    if (typeof value === 'string') {
      const formats = ['h:mm A', 'hh:mm A', 'H:mm', 'HH:mm'];

      for (const format of formats) {
        const parsed = moment(value.trim(), format, true);
        if (parsed.isValid()) return parsed;
      }
    }

    return null;
  }, []);

  const getScheduledDate = useCallback(() => {
    if (!date || !time) return null;

    const parsedTime = parseTime(time);
    if (!parsedTime) return null;

    const now = moment();

    const selectedDateTime = moment(date)
      .hour(parsedTime.hour())
      .minute(parsedTime.minute())
      .second(0)
      .millisecond(0);


    if (selectedDateTime.isSameOrBefore(now)) {
      return null;
    }

    return selectedDateTime.format("YYYY-MM-DDTHH:mm:ss");
  }, [date, time, parseTime]);

  useEffect(() => {
    const scheduled = getScheduledDate();

    setScheduledDate(scheduled);
    if (!scheduled && time) {
      setError("Please select a future date and time.");
    } else {
      setError("");
    }
  }, [getScheduledDate, date, time, setScheduledDate]);

  const onConfirm = async (e) => {
    const scheduled = getScheduledDate();

   


    setScheduledDate(scheduled);

    // If handleSubmit already prevents default, this is harmless
    if (e?.preventDefault) e.preventDefault();

    await handleSubmit(e);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full h-auto flex flex-col p-4 gap-4'>
      <button
        type='button'
        className='text-lg text-[#c00000] font-medium flex gap-1 items-center'
        onClick={() => {
          setIsScheduled(false);
          navigate('/ride/new-request/where-to');
        }}
      >
        <IoChevronBack />
        <span>Back to Home</span>
      </button>

      <div className='w-full xl:w-2/3 flex flex-col gap-6 p-4'>
        <div className='w-full border border-gray-200 rounded-xl shadow-sm p-4 schedule-datepicker-wrapper'>
          <DatePicker
            selected={date}
            onChange={(value) => setDate(value)}
            minDate={new Date()}
            inline
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              changeYear,
            }) => (
              <div className='flex items-center justify-between px-2 pb-3 gap-2'>
                <button
                  onClick={decreaseMonth}
                  type='button'
                  className='text-[#c00000] text-xl'
                >
                  <IoChevronBack />
                </button>

                <span className='text-lg font-medium text-gray-800'>
                  {moment(date).format('MMMM YYYY')}
                </span>

                <button
                  onClick={increaseMonth}
                  type='button'
                  className='text-[#c00000] text-xl'
                >
                  <IoChevronForward />
                </button>

                <select
                  value={moment(date).year()}
                  onChange={(e) => changeYear(Number(e.target.value))}
                  className='border border-gray-300 rounded-full px-3 py-1 text-sm'
                >
                  {Array.from({ length: 6 }, (_, i) => currentYear + i).map(
                    (y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}
          />
        </div>

        <CustomTimePicker
          value={time}
          onChange={setTime}
        />

        <button
          type='button'
          onClick={onConfirm}
          disabled={rideLoading}
          className='w-full h-12 rounded-full bg-[#c00000] disabled:opacity-50 disabled:cursor-not-allowed text-white flex justify-center gap-2 items-center text-lg font-medium'
        >
          {rideLoading && (
            <div
              className='animate-spin inline-block size-4 border-[3px] border-current border-t-transparent rounded-full'
              role='status'
              aria-label='loading'
            />
          )}

          Confirm date and time
        </button>
      </div>

      {openConfirm && (
        <RideConfirmedModal
          isOpen={openConfirm}
          setIsOpen={setOpenConfirm}
        />
      )}
    </div>
  );
};

export default ScheduleForLater;