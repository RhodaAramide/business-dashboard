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
        <div className="p-6 max-w-4xl mx-auto">
            <Link href="/dashboard" className="flex items-center text-blue-600 hover:underline mb-6">
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
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Shipment Details</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">Tracking ID:</span> {shipment?.trackingId}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">Sender:</span> {shipment?.sender}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">Receiver:</span> {shipment?.receiver}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">Pickup Location:</span> {shipment?.pickUpFrom}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">Delivery Location:</span> {shipment?.deliveryTo}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">Amount:</span> ₦{shipment?.amount}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">Status:</span> {shipment?.status}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-semibold text-gray-800">Processing Time:</span> {shipment?.processingTime}
                    </p>
                </div>
            </div>
        </div>
    );
}
