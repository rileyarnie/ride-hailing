import { getAvailableRides } from "@/queries/getRides";
import { Ride } from "@/types/Ride";
import { useSuspenseQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data: availableRides } = useSuspenseQuery(getAvailableRides);
  return (
    <div>
      <h2 className="text-3xl">Available Rides</h2>
      {availableRides?.map((ride: Ride) => (
        <div key={ride.id}>{ride.driverName}</div>
      ))}
    </div>
  );
};

export default HomePage;

///!@#QUXcrp93Um4Q
