import { CaretIcon, FlagIcon, TimerIcon } from "@/assets/icons";
import Link from "next/link";
import { shipments } from "@/data/shipments";



export const ShipmentList = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      {shipments.map(
        (shipment) => (
          <div
            key={shipment.trackingId}
            className="bg-white p-6 rounded-xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b-[0.5px] border-[#DBD7D780] pb-4 gap-4">
                <div className="flex gap-20">
                  <p className="flex flex-col gap-2 text-xs text-[#808080]">
                    Tracking ID{" "}
                    <span className="text-links text-base">
                      {shipment.trackingId}
                    </span>
                  </p>
                  <p className="flex flex-col gap-2 text-xs text-[#808080]">
                    Sender{" "}
                    <span className="text-[#3A3A3A] text-base">
                      {shipment.sender}
                    </span>
                  </p>
                  <p className="flex flex-col gap-2 text-xs text-[#808080]">
                    Receiver{" "}
                    <span className="text-[#3A3A3A] text-base">
                      {shipment.receiver}
                    </span>
                  </p>
                </div>
                <div>
                  <CaretIcon />
                </div>
              </div>
              <div className="flex justify-between items-center border-b-[0.5px] border-[#DBD7D780] pb-4 gap-4">
                <p className="flex flex-col gap-2 text-xs capitalize text-[#808080]">
                  Pick up from{" "}
                  <span className="flex gap-2 items-center text-neutral-900 text-sm">
                    <FlagIcon /> {shipment.pickUpFrom}
                  </span>
                </p>
                <p className="flex flex-col gap-2 text-xs capitalize text-[#808080]">
                  Delivery to{" "}
                  <span className="flex gap-2 items-center text-neutral-900 text-sm">
                  <FlagIcon /> {shipment.deliveryTo}
                  </span>
                </p>
                <p className="flex flex-col gap-2 text-xs text-[#808080]">
                  Amount{" "}
                  <span className="text-neutral-900 text-sm">
                    {shipment.amount}
                  </span>
                </p>
                <p className="flex flex-col gap-2 text-xs text-[#808080]">
                  Status{" "}
                  <span
                    className={`text-xs rounded-lg p-2 ${
                      shipment.status === "Delayed"
                        ? "text-[#003337] bg-[#C0FBFF]"
                        : shipment.status === "In-Transit"
                        ? "text-[#FFA500] bg-[#FFF4E5]"
                        : shipment.status === "Delivered"
                        ? "text-[#008000] bg-[#E6F4EA]"
                        : "text-[#3A3A3A] bg-[#DBD7D780]"
                    }`}
                  >
                    {shipment.status}
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="flex flex-col gap-2 text-xs text-[#808080]">
                  Processing time{" "}
                  <span className="flex gap-2 items-center text-[#3A3A3A] text-base">
                    <TimerIcon /> {shipment.processingTime}
                  </span>
                </p>
                <div className="flex gap-2 items-center">
                <Link href={`/dashboard/shipments/${shipment.trackingId}`} key={shipment.trackingId}>
                  <button className="px-4 py-2 border border-banner text-banner rounded-lg text-xs">
                    View More
                  </button>
                  </Link>
                  {shipment.paid ? (
                    <button className="px-4 py-2 bg-[#EFEDED] text-[#808080] font-semibold rounded-lg text-xs">
                      Paid
                    </button>
                  ) : (
                    <button className="px-4 py-2 bg-[#32385E] text-white rounded-lg text-xs">
                      Pay now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
