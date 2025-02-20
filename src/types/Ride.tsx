export interface Ride {
  id: number;
  driverName: string;
  driverRating: number;
  estimatedFare: number;
  distance: number;
  estimatedDuration: number;
  pickupLocation: string;
  destination: string;
  vehicleDetails: {
    make: string;
    model: string;
    color: string;
    licensePlate: string;
  };
  eta: number;
}
