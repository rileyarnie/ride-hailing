import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useRide } from "@/context/RideContext";

export default function RideHistoryTable() {
  const { rideHistory } = useRide();
  return (
    <div className="w-full mx-auto py-10">
      <DataTable columns={columns} data={rideHistory || []} />
    </div>
  );
}
