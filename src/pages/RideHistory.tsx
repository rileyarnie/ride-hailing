import RideHistoryTable from "@/components/available-rides/RideHistoryTable";
import RideCard from "@/components/RideCard";
import { useRide } from "@/context/RideContext";
import { Ride } from "@/types/Ride";

const RideHistory = () => {
  const { rideHistory } = useRide();

  return (
    <div>
      <h2 className="text-3xl">Ride History</h2>
      <div className="lg:hidden grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 items-center py-4">
        {rideHistory?.map((ride: Ride) => <RideCard ride={ride} />)}
      </div>
      <div className="hidden lg:block">
        <RideHistoryTable />
      </div>
    </div>
  );
};

export default RideHistory;
