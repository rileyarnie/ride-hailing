import { Ride } from "@/types/Ride";
import { ColumnDef } from "@tanstack/react-table";
import { Star } from "lucide-react";
import AlertModal from "../AlertModal";
import { useRide } from "@/context/RideContext";
import { Button } from "../ui/button";

export const columns: ColumnDef<Ride>[] = [
  {
    accessorKey: "driverName",
    header: "Driver Name",
  },
  {
    accessorKey: "vehicleDetails",
    header: "",
    cell: () => {},
  },
  {
    accessorKey: "vehicleDetails.make",
    header: "Vehicle Details",
    cell: ({ row }) => {
      const vehicle: {
        color: string;
        licensePlate: string;
        make: string;
        model: string;
      } = row.getValue("vehicleDetails");
      return (
        <p>
          {vehicle?.color} {vehicle?.make} {vehicle?.model}
          {" - "}
          {vehicle?.licensePlate}
        </p>
      );
    },
  },
  {
    accessorKey: "driverRating",
    header: "Driver Rating",
    cell: ({ row }) => {
      const rating: string = row.getValue("driverRating");
      return (
        <div className=" space-y-1">
          <div className="flex space-x-2 align-middle items-center">
            <Star size={16} color="#F7BC1E" fill="#F7BC1E" />
            <p>{Number(rating).toFixed(1)}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: "",
  },
  {
    accessorKey: "pickupLocation",
    header: "Pickup Point",
  },
  {
    accessorKey: "destination",
    header: "Dropoff Point",
  },
  {
    accessorKey: "estimatedDuration",
    header: "Duration",
    cell: ({ row }) => {
      const duration = row.getValue("estimatedDuration") as string;
      return <p>{duration} mins</p>;
    },
  },
  {
    accessorKey: "distance",
    header: "Distance",
    cell: ({ row }) => {
      const distance = row.getValue("distance") as string;
      return <p>{distance} Kms</p>;
    },
  },
  {
    accessorKey: "estimatedFare",
    header: "Fare",
    cell: ({ row }) => {
      const price = row.getValue("estimatedFare") as string;
      return <p>KES {price}</p>;
    },
  },
  {
    accessorKey: "",
    header: "Actions",
    cell: function CellComponent({ row }) {
      const rideId = row.getValue("id") as string;
      const price = row.getValue("estimatedFare") as string;
      const driver = row.getValue("driverName") as string;
      const pickupLocation = row.getValue("pickupLocation") as string;
      const destination = row.getValue("destination") as string;
      const { rideHistory, bookRide } = useRide();
      const rideBooked = rideHistory?.some(
        (ride) => ride.id === Number(rideId)
      );

      return (
        <>
          {/* <p>{rideBooked}</p> */}
          {rideBooked ? (
            <Button className="w-full capitalize" disabled>
              Ride booked
            </Button>
          ) : (
            <AlertModal
              name="Book ride"
              title={`Book ride ?`}
              message={` You are about to book a ride with ${driver} from ${pickupLocation} to ${destination} for KES ${price}`}
              onSubmit={() => {
                bookRide(row.original);
              }}
            />
          )}
        </>
      );
    },
  },
];
