import { Ride } from "@/types/Ride";
import { createContext, useContext, useState } from "react";

interface IRideContext {
  availableRides: Ride[];
  rideHistory: Ride[] | null;
  bookRide: (ride: Ride) => void;
  setRides: (rides: Ride[]) => void;
}

const RideContext = createContext<IRideContext | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useRide = () => {
  const context = useContext(RideContext);
  if (!context) {
    throw new Error("useRide must be used within a RideProvider");
  }
  return context;
};

export const RideProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [availableRides, setAvailableRides] = useState<Ride[]>([]);
  const [rideHistory, setRideHistory] = useState<Ride[]>(
    JSON.parse(localStorage.getItem("rideHistory") as string) || []
  );

  //   useEffect(() => {
  //     // Fetch available rides from API or use mock data
  //     const mockRides: Ride[] = [
  //       {
  //         id: 1,
  //         driverName: "John Doe",
  //         driverRating: 4.8,
  //         estimatedFare: 15.5,
  //         distance: 5.2,
  //         estimatedDuration: 15,
  //         pickupLocation: "123 Main St",
  //         destination: "456 Elm St",
  //         vehicleDetails: {
  //           make: "Toyota",
  //           model: "Camry",
  //           color: "Silver",
  //           licensePlate: "ABC123",
  //         },
  //         eta: 5,
  //       },
  //       {
  //         id: 2,
  //         driverName: "Jane Smith",
  //         driverRating: 4.9,
  //         estimatedFare: 22.75,
  //         distance: 7.8,
  //         estimatedDuration: 25,
  //         pickupLocation: "789 Oak Ave",
  //         destination: "101 Pine Rd",
  //         vehicleDetails: {
  //           make: "Honda",
  //           model: "Civic",
  //           color: "Blue",
  //           licensePlate: "XYZ789",
  //         },
  //         eta: 8,
  //       },
  //       {
  //         id: 3,
  //         driverName: "Bob Johnson",
  //         driverRating: 4.7,
  //         estimatedFare: 12.25,
  //         distance: 3.5,
  //         estimatedDuration: 10,
  //         pickupLocation: "222 Cedar Ln",
  //         destination: "333 Birch Blvd",
  //         vehicleDetails: {
  //           make: "Ford",
  //           model: "Focus",
  //           color: "Red",
  //           licensePlate: "DEF456",
  //         },
  //         eta: 3,
  //       },
  //     ];
  //     setAvailableRides(mockRides);

  //     // Load ride history from local storage
  //     const storedHistory = localStorage.getItem("rideHistory");
  //     if (storedHistory) {
  //       setRideHistory(JSON.parse(storedHistory));
  //     }
  //   }, []);

  const setRides = (rides: Ride[]) => {
    setAvailableRides(rides);
  };

  const bookRide = (ride: Ride) => {
    setAvailableRides(availableRides.filter((r) => r.id !== ride.id));
    setRideHistory([...rideHistory, ride]);
    localStorage.setItem("rideHistory", JSON.stringify([...rideHistory, ride]));
  };

  return (
    <RideContext.Provider
      value={{ availableRides, setRides, rideHistory, bookRide }}
    >
      {children}
    </RideContext.Provider>
  );
};
