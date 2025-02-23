import AvailableRidesTable from "@/components/available-rides/RidesTable";
import RideCard from "@/components/RideCard";
import { getAvailableRides } from "@/queries/getRides";
import { Ride } from "@/types/Ride";
import { useSuspenseQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data: availableRides } = useSuspenseQuery(getAvailableRides);

  return (
    <div>
      <h2 className="text-3xl">Available Rides</h2>
      <div className="lg:hidden grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3 items-center py-4">
        {availableRides.map((ride: Ride) => (
          <RideCard key={ride.id} ride={ride} />
        ))}
      </div>
      <div className="hidden lg:block">
        <AvailableRidesTable data={availableRides} />
      </div>
    </div>
  );
};

export default HomePage;
