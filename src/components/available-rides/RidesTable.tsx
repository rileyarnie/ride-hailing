import { Ride } from "@/types/Ride";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function AvailableRidesTable({ data }: { data: Ride[] }) {
  return (
    <div className="w-full mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
