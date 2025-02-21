# Ride-Hailing Service Dashboard

This is a React-based dashboard for a ride-hailing service that allows users to view available rides, book a ride, and see their ride history. The application is built with React, TanStack Query for data fetching, TanStack Router for routing, and TailwindCSS for styling.

To view the deployed application, visit [this link](https://ride-hailing-lyart.vercel.app/) in your browser.

## Features

### Available Rides Page:

- Displays a list of available rides with details such as driver name, estimated fare, and distance.
- Includes a "Book Ride" button for each ride.

### Ride Booking Flow:

- When a user clicks "Book Ride," a confirmation modal is shown.
- After confirmation, the ride is marked as booked and moved to the "Ride History" page.

### Ride History Page:

- Displays a list of completed rides with ride details.

### Performance & Responsiveness:

- The app is mobile-friendly using CSS Grid and Flexbox.
- Optimized rendering performance (e.g., lazy loading, minimal re-renders) by using React router.

### Bonus Features:

- Loading state while fetching ride data.
- Local storage to persist booked rides.
- Light/dark mode toggle.

## Tech Stack

- **Frontend Framework:** React
- **State Management:** TanStack Query (React Query)
- **Routing:** TanStack Router (React Routing)
- **Styling:** TailwindCSS & ShadCn
- **Mock Data:** JSON file (`public/data.json`)

## Installation

### Clone the Repository:

```bash
git clone https://github.com/rileyarnie/ride-hailing.git
cd ride-hailing
```

### Install Dependencies:

```bash
npm install
```

### Run the Development Server:

```bash
npm run dev
```

### Open the App:

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

### Available Rides Page:

- View a list of available rides.
- Click "Book Ride" to book a ride.

### Ride Booking Flow:

- A confirmation modal will appear when you click "Continue."
- Confirm the booking to move the ride to the "Ride History" page.

### Ride History Page:

- View a list of completed rides.

## Mock Data

The application uses mock data stored in `public/data.json`. You can modify this file to add or update ride details.

### Example `data.json`:

```json
[
  {
    "id": 1,
    "driverName": "John Mwangi",
    "driverRating": 4.7,
    "estimatedFare": 550,
    "distance": 12,
    "estimatedDuration": 25,
    "pickupLocation": "Nairobi CBD",
    "destination": "Westlands",
    "vehicleDetails": {
      "make": "Toyota",
      "model": "Axio",
      "color": "White",
      "licensePlate": "KDA 321B"
    },
    "eta": 5
  }
]
```

## TanStack Router

The application uses TanStack Router (formerly React Location) for routing. TanStack Router is a modern, type-safe routing library for React applications.

### Advantages of TanStack Router

#### Type Safety:

- TanStack Router is built with TypeScript, providing excellent type safety and autocompletion for routes and route parameters.

#### Dynamic Routing:

- Supports dynamic and nested routes, making it easy to build complex routing structures.

#### Data Loading:

- Integrates seamlessly with TanStack Query, allowing you to prefetch data for routes and manage loading states.

#### Code Splitting:

- Supports lazy loading of routes, improving performance by loading only the necessary code for each route.

#### Search Params:

- Provides built-in support for managing search parameters (query strings) in a type-safe way.

#### Developer Experience:

- Offers a great developer experience with features like route matching, route transitions, and route-based code splitting.

## Deployment

### Build the Project:

```bash
npm run build
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- **React** for the frontend framework.
- **TanStack Query** for data fetching and state management.
- **TanStack Router** for routing.
- **TailwindCSS** for styling.
