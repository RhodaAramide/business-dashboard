export const ShipmentList = () => {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Shipments</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Tracking ID: <span className="text-indigo-600 font-semibold">MAF-100-234-298</span></p>
              <p className="text-sm">Sender: Bunmi Tommy → Receiver: Mercy</p>
              <p className="text-sm text-gray-500">Lagos, Nigeria → Oyo, Nigeria</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">View More</button>
          </div>
        </div>
      </div>
    );
};
