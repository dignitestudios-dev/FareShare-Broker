import React, { useState, useEffect } from "react";
import { IoClose, IoChevronUp, IoChevronDown } from "react-icons/io5";

const CustomTimePicker = ({ value, onChange, placeholder = "--:-- --" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hour, setHour] = useState("09");
    const [minute, setMinute] = useState("00");
    const [meridiem, setMeridiem] = useState("AM");

    useEffect(() => {
        if (value) {
            const parts = value.split(" ");
            if (parts.length >= 2) {
                const [time, mer] = parts;
                const [h, m] = time.split(":");
                setHour(h.padStart(2, "0"));
                setMinute(m.padStart(2, "0"));
                setMeridiem(mer || meridiem);
            }
        }
    }, [value]);

    const pad = (num) => String(num).padStart(2, "0");

    const incHour = () =>
        setHour((prev) => pad(((parseInt(prev) % 12) + 1) === 0 ? 12 : ((parseInt(prev) % 12) + 1)));
    const decHour = () =>
        setHour((prev) => {
            const val = parseInt(prev) - 1;
            return pad(val <= 0 ? 12 : val);
        });

    const incMinute = () =>
        setMinute((prev) => pad((parseInt(prev) + 1) % 60));
    const decMinute = () =>
        setMinute((prev) => pad((parseInt(prev) - 1 + 60) % 60));

    const handleOk = () => {
        const formatted = `${hour}:${minute} ${meridiem}`;
        onChange(formatted);
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative w-full">
            <div
                onClick={() => setIsOpen(true)}
                className="w-full border border-gray-300 rounded-full px-4 py-3 flex justify-between items-center cursor-pointer"
            >
                <span className={value ? "text-gray-800" : "text-gray-400"}>
                    {value || placeholder}
                </span>
                <span className="text-gray-400">🕐</span>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-[380px] relative">
                        <button
                            onClick={handleCancel}
                            className="absolute top-4 right-4 text-[#c00000] text-xl"
                        >
                            <IoClose />
                        </button>

                        <div className="flex items-stretch justify-center gap-1 bg-gray-100 rounded-xl overflow-hidden mt-6">
                            {/* Hour */}
                            <div className="flex flex-col items-center justify-center px-6 py-4">
                                <button onClick={incHour} className="text-gray-400 hover:text-[#c00000]">
                                    <IoChevronUp size={18} />
                                </button>
                                <span className="text-3xl font-semibold text-gray-800 my-1">
                                    {hour}
                                </span>
                                <button onClick={decHour} className="text-gray-400 hover:text-[#c00000]">
                                    <IoChevronDown size={18} />
                                </button>
                            </div>

                            <span className="text-3xl text-[#c00000] self-center">:</span>

                            {/* Minute */}
                            <div className="flex flex-col items-center justify-center px-6 py-4">
                                <button onClick={incMinute} className="text-gray-400 hover:text-[#c00000]">
                                    <IoChevronUp size={18} />
                                </button>
                                <span className="text-3xl font-semibold text-gray-800 my-1">
                                    {minute}
                                </span>
                                <button onClick={decMinute} className="text-gray-400 hover:text-[#c00000]">
                                    <IoChevronDown size={18} />
                                </button>
                            </div>

                            {/* AM/PM */}
                            <div className="flex flex-col w-16">
                                <button
                                    onClick={() => setMeridiem("AM")}
                                    className={`flex-1 font-semibold ${meridiem === "AM"
                                        ? "bg-[#c00000] text-white"
                                        : "bg-gray-100 text-gray-400"
                                        }`}
                                >
                                    AM
                                </button>
                                <button
                                    onClick={() => setMeridiem("PM")}
                                    className={`flex-1 font-semibold ${meridiem === "PM"
                                        ? "bg-[#c00000] text-white"
                                        : "bg-gray-100 text-gray-400"
                                        }`}
                                >
                                    PM
                                </button>
                            </div>

                            {/* Up/Down full toggle */}
                            <div className="flex flex-col justify-center px-2">
                                <button
                                    onClick={() =>
                                        setMeridiem((prev) => (prev === "AM" ? "PM" : "AM"))
                                    }
                                    className="text-gray-400 hover:text-[#c00000]"
                                >
                                    <IoChevronUp size={16} />
                                </button>
                                <button
                                    onClick={() =>
                                        setMeridiem((prev) => (prev === "AM" ? "PM" : "AM"))
                                    }
                                    className="text-gray-400 hover:text-[#c00000]"
                                >
                                    <IoChevronDown size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={handleCancel}
                                className="text-[#c00000] font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleOk}
                                className="bg-[#c00000] text-white px-8 py-2 rounded-full font-medium"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomTimePicker;