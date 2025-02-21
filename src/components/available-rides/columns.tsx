import { Ride } from "@/types/Ride";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

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
    cell: ({ row }) => {
      const price = row.getValue("estimatedFare") as string;
      console.log("price", price);
      return (
        <Button
          className="cursor-pointer"
          onClick={() => alert(`Booking ride, ${price}`)}
        >
          Book Ride
        </Button>
      );
    },
  },
];
