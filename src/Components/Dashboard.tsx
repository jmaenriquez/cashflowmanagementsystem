function Dashboard() {
  return (
    <div className="pt-16 w-full pt-16 px-12 font-roboto">
      <h1 className="text-4xl font-semibold text-[#1e293b]">Dashboard</h1>

      <div className="cards w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div className="w-full h-45 shadow-lg rounded-lg">
          <div className="name text-[#1e293b] w-full p-4 font-bold">
            Cash on Hand
          </div>
          <div className="amount text-[#1e293b] w-full text-center text-4xl font-normal">
            ₱0.00
          </div>
          <div className="percent text-[#1e293b] w-full text-right mt-4 text-xs p-4">
            0.4%
          </div>
        </div>

        <div className="w-full h-45 shadow-lg rounded-lg">
          <div className="name text-[#1e293b] w-full p-4 font-bold">
            Cash on Hand
          </div>
          <div className="amount text-[#1e293b] w-full text-center text-4xl font-normal">
            ₱0.00
          </div>
          <div className="percent text-[#1e293b] w-full text-right mt-4 text-xs p-4">
            0.4%
          </div>
        </div>

        <div className="w-full h-45 shadow-lg rounded-lg">
          <div className="name text-[#1e293b] w-full p-4 font-bold">
            Cash on Hand
          </div>
          <div className="amount text-[#1e293b] w-full text-center text-4xl font-normal">
            ₱0.00
          </div>
          <div className="percent text-[#1e293b] w-full text-right mt-4 text-xs p-4">
            0.4%
          </div>
        </div>

        <div className="w-full h-45 shadow-lg rounded-lg">
          <div className="name text-[#1e293b] w-full p-4 font-bold">
            Cash on Hand
          </div>
          <div className="amount text-[#1e293b] w-full text-center text-4xl font-normal">
            ₱0.00
          </div>
          <div className="percent text-[#1e293b] w-full text-right mt-4 text-xs p-4">
            0.4%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
