import { Ride } from "@/types/Ride";
import { Car, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useRide } from "@/context/RideContext";
import AlertModal from "./AlertModal";

const RideCard = ({ ride }: { ride: Ride }) => {
  const { rideHistory, bookRide } = useRide();
  const rideBooked = rideHistory?.some(
    (bookedRide) => bookedRide.id === Number(ride.id)
  );
  return (
    <div className="bg-gray-100 shadow-md rounded -md p-4 space-y-4">
      <div className=" flex justify-between">
        <p className="font-semibold text-lg">{ride.driverName}</p>
        <div className="flex items-center space-x-1">
          <Star size={16} color="#F7BC1E" fill="#F7BC1E" />
          <p className="text-sm font-extrabold">{ride.driverRating}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex items-center space-x-2">
          <Car />
          <p>
            {ride.vehicleDetails.make} {ride.vehicleDetails.model}
          </p>
        </div>
        <p>License Plate: {ride.vehicleDetails.licensePlate}</p>
      </div>
      <div className=" flex justify-between">
        <p>From: {ride.pickupLocation}</p>
        <p>To: {ride.destination}</p>
      </div>
      <div className=" flex justify-between">
        <p>ETA: {ride.eta} mins</p>
        <p>Duration: {ride.estimatedDuration} mins</p>
      </div>
      <div className=" flex justify-between">
        <p>Estimated Fare: Kshs. {ride.estimatedFare}</p>
        <p>Distance: {ride.distance}kms</p>
      </div>
      {rideBooked ? (
        <Button className="w-full" disabled>
          Ride Booked
        </Button>
      ) : (
        <AlertModal
          name="Book ride"
          title={`Book ride ?`}
          message={` You are about to book a ride with ${ride.driverName} from ${ride.pickupLocation} to ${ride.destination} for KES ${ride.estimatedFare}`}
          onSubmit={() => {
            bookRide(ride);
          }}
        />
      )}
    </div>
  );
};

export default RideCard;
