const DashboardHeader = ({ userName, onTransactionsClick, onSignOut }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
      Welcome, <span className="text-[#4b6043]">{userName}</span>!
    </h1>
    <div className="flex justify-center sm:justify-end gap-3">
      <button
        onClick={onTransactionsClick}
        className="text-[#4b6043] border border-[#4b6043] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Transactions
      </button>
      <button
        onClick={onSignOut}
        className="text-red-600 border border-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition"
      >
        Sign Out
      </button>
    </div>
  </div>
);
export default DashboardHeader;
