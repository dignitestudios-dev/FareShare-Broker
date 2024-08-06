import React from "react";
import RideRequestTable from "../../components/app/home/RideRequestTable";
import OngoingRideTable from "../../components/app/home/OngoingRideTable";
import CompletedRideTable from "../../components/app/home/CompletedRideTable";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-start items-start ">
      <RideRequestTable />
      <OngoingRideTable />
      <CompletedRideTable />
    </div>
  );
};

export default Home;
