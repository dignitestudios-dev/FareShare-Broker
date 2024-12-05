import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../api/apiInterceptor";

const Settings = () => {
  // Broker:
  const [settings, setSettings] = useState(null);

  const getSettings = async () => {
    const settings = await api.get("/notification/settings");
    console.log(settings);
  };

  useEffect(() => {
    getSettings();
  }, []);
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col  gap-2 justify-start items-start">
      <div className="bg-gray-100 w-full rounded-xl  px-4 h-12 flex gap-6 justify-between items-center">
        <span className="text-black text-md font-medium">
          Show Notifications
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
        </label>
      </div>
      <div className="bg-gray-100 w-full rounded-xl  px-4 h-12 flex gap-6 justify-between items-center">
        <span className="text-black text-md font-medium">
          Floating Notifications
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
        </label>
      </div>
      <div className="bg-gray-100 w-full rounded-xl  px-4 h-12 flex gap-6 justify-between items-center">
        <span className="text-black text-md font-medium">
          Lock Screen Notifications
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
        </label>
      </div>
      {/* <div className="bg-gray-100 w-full rounded-xl  px-4 h-12 flex gap-6 justify-between items-center">
        <span className="text-black text-md font-medium">Allow Vibrations</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
        </label>
      </div>
      <div className="bg-gray-100 w-full rounded-xl  px-4 h-12 flex gap-6 justify-between items-center">
        <span className="text-black text-md font-medium">Allow Sounds</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
        </label>
      </div> */}
      <div className="bg-gray-100 w-full rounded-xl  px-4 h-12 flex gap-6 justify-between items-center">
        <span className="text-black text-md font-medium">
          Show Message Notifications
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
        </label>
      </div>
    </div>
  );
};

export default Settings;
