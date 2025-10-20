import { ArrowLeft } from "lucide-react";
const TransactionForm = ({ amount, setAmount, handleTransaction, onBack }) => {
  return (
    <div className="space-y-5">
      <label className="block text-sm font-medium text-gray-700">
        Amount (USD)
      </label>
      <input
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8fc99a]/50 text-lg"
        placeholder="e.g. 250.00"
        aria-label="transaction-amount"
      />
      <div className="flex gap-4 flex-col sm:flex-row">
        <button
          onClick={() => handleTransaction("credit")}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-3 font-semibold bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-md hover:scale-[1.02] transition-transform"
        >
          Credit
        </button>
        <button
          onClick={() => handleTransaction("cashout")}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-3 font-semibold bg-gradient-to-r from-rose-500 to-rose-700 text-white shadow-md hover:scale-[1.02] transition-transform"
        >
          Cash Out
        </button>
      </div>
      <button
        onClick={onBack}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>
    </div>
  );
};
export default TransactionForm;
