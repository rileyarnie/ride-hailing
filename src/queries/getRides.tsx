import { queryOptions } from "@tanstack/react-query";

const mockedRequest = async () => {
  const availableRides = await fetch("/data/rides.json");
  return availableRides.json();
};

export const getAvailableRides = queryOptions({
  queryKey: ["available-rides"],
  queryFn: mockedRequest,
  staleTime: 50000,
});
