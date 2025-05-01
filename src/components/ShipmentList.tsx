import { CaretIcon, FlagIcon, TimerIcon } from "@/assets/icons";
import Link from "next/link";
import { shipments } from "@/data/shipments";
import { motion } from "framer-motion";

export const ShipmentList = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {shipments.map((shipment) => (
        <motion.div
          key={shipment.trackingId}
          className="bg-white p-4 md:p-6 rounded-xl shadow-sm flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-4 gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-20">
                <p className="flex flex-col gap-2 text-xs text-gray-500">
                  Tracking ID{" "}
                  <span className="text-links text-sm md:text-base">
                    {shipment.trackingId}
                  </span>
                </p>
                <p className="flex flex-col gap-2 text-xs text-gray-500">
                  Sender{" "}
                  <span className="text-gray-800 text-sm md:text-base">
                    {shipment.sender}
                  </span>
                </p>
                <p className="flex flex-col gap-2 text-xs text-gray-500">
                  Receiver{" "}
                  <span className="text-gray-800 text-sm md:text-base">
                    {shipment.receiver}
                  </span>
                </p>
              </div>
              <div className="self-end md:self-auto">
                <CaretIcon />
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-4 gap-4">
              <p className="flex flex-col gap-2 text-xs text-gray-500">
                Pick up from{" "}
                <span className="flex items-center gap-2 text-gray-900 text-sm">
                  <FlagIcon /> {shipment.pickUpFrom}
                </span>
              </p>
              <p className="flex flex-col gap-2 text-xs text-gray-500">
                Delivery to{" "}
                <span className="flex items-center gap-2 text-gray-900 text-sm">
                  <FlagIcon /> {shipment.deliveryTo}
                </span>
              </p>
              <p className="flex flex-col gap-2 text-xs text-gray-500">
                Amount{" "}
                <span className="text-gray-900 text-sm">
                  {shipment.amount}
                </span>
              </p>
              <p className="flex flex-col gap-2 text-xs text-gray-500">
                Status{" "}
                <span
                  className={`text-xs rounded-lg px-3 py-1 ${
                    shipment.status === "Delayed"
                      ? "text-teal-900 bg-teal-100"
                      : shipment.status === "In-Transit"
                      ? "text-orange-600 bg-orange-100"
                      : shipment.status === "Delivered"
                      ? "text-green-700 bg-green-100"
                      : "text-gray-700 bg-gray-200"
                  }`}
                >
                  {shipment.status}
                </span>
              </p>
            </div>

            {/* Footer Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="flex flex-col gap-2 text-xs text-gray-500">
                Processing time{" "}
                <span className="flex items-center gap-2 text-gray-800 text-sm">
                  <TimerIcon /> {shipment.processingTime}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/dashboard/shipments/${shipment.trackingId}`}
                  key={shipment.trackingId}
                >
                  <button className="px-4 py-2 border border-banner text-banner rounded-lg text-xs">
                    View More
                  </button>
                </Link>
                {shipment.paid ? (
                  <button className="px-4 py-2 bg-gray-200 text-gray-500 font-semibold rounded-lg text-xs">
                    Paid
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs">
                    Pay now
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
