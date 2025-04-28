export const OverviewSection = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm font-medium text-gray-500 mb-2">Your Balance</h2>
          <p className="text-2xl font-bold">₦3,000,000.28</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm font-medium text-gray-500 mb-2">Total Shipments</h2>
          <p className="text-2xl font-bold">34</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm font-medium text-gray-500 mb-2">Total Exports</h2>
          <p className="text-2xl font-bold">34</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-sm font-medium text-gray-500 mb-2">Total Imports</h2>
          <p className="text-2xl font-bold">34</p>
        </div>
      </div>
    );
  }
  