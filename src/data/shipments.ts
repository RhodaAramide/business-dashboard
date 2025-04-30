export interface Shipment {
    trackingId: string;
    sender: string;
    receiver: string;
    pickUpFrom: string;
    deliveryTo: string;
    amount: number;
    status: "Delayed" | "Delivered" | "In-Transit";
    processingTime: string;
    paid: boolean;
  }
  
  export const shipments: Shipment[] = [
    {
      trackingId: "MAF-100-234-298",
      sender: "Bunmi Tanny",
      receiver: "Mercy",
      pickUpFrom: "Lagos, Nigeria",
      deliveryTo: "Oyo, Nigeria",
      amount: 3000,
      status: "In-Transit",
      processingTime: "10 hours",
      paid: true,
    },
    {
      trackingId: "MAF-200-345-678",
      sender: "John Doe",
      receiver: "Jane Smith",
      pickUpFrom: "Abuja, Nigeria",
      deliveryTo: "Kaduna, Nigeria",
      amount: 5000,
      status: "Delayed",
      processingTime: "5 hours",
      paid: false,
    },
    {
      trackingId: "MAF-300-456-789",
      sender: "Alice Brown",
      receiver: "Bob White",
      pickUpFrom: "Port Harcourt, Nigeria",
      deliveryTo: "Enugu, Nigeria",
      amount: 4000,
      status: "Delivered",
      processingTime: "8 hours",
      paid: true,
    },
  ];