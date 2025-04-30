"use client";

import { shipments } from "@/data/shipments";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";

export default function ShipmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // Unwrap the params Promise

    const shipment = shipments.find((s) => s.trackingId === id);

    if (!shipment) {
        notFound();
    }

    return (
        <div className="p-6">
            <Link href="/dashboard" className="flex items-center text-links hover:underline mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Back to Dashboard
            </Link>
            <h1 className="text-2xl font-bold mb-6">Shipment Details</h1>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <p><span className="font-semibold">Tracking ID:</span> {shipment?.trackingId}</p>
                <p><span className="font-semibold">Sender:</span> {shipment?.sender}</p>
                <p><span className="font-semibold">Receiver:</span> {shipment?.receiver}</p>
                <p><span className="font-semibold">Pickup Location:</span> {shipment?.pickUpFrom}</p>
                <p><span className="font-semibold">Delivery Location:</span> {shipment?.deliveryTo}</p>
                <p><span className="font-semibold">Amount:</span> ₦{shipment?.amount}</p>
                <p><span className="font-semibold">Status:</span> {shipment?.status}</p>
                <p><span className="font-semibold">Processing Time:</span> {shipment?.processingTime}</p>
            </div>
        </div>
    );
}
