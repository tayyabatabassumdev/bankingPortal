import React, { useState } from "react";
import { useBankStore } from "../store/bankStore";
import { useNavigate } from "react-router-dom";
import { ArrowDownCircle, ArrowUpCircle, ArrowLeft } from "lucide-react";

const TransactionPage = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const currentUser = useBankStore((state) => state.currentUser);
  const creditMoney = useBankStore((state) => state.creditMoney);
  const cashOutMoney = useBankStore((state) => state.cashOutMoney);

  const balance = currentUser?.balance ? currentUser.balance.toFixed(2) : "0.00";

  const handleTransaction = (type) => {
    setError("");
    const numAmount = parseFloat(amount);

    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Please enter a valid amount greater than zero.");
      return;
    }

    if (type === "credit") {
      creditMoney(numAmount);
      alert(`Successfully credited $${numAmount.toFixed(2)}.`);
    } else if (type === "cashout") {
      if (numAmount > currentUser.balance) {
        setError("Cash out amount exceeds current balance.");
        return;
      }
      cashOutMoney(numAmount);
      alert(`Successfully cashed out $${numAmount.toFixed(2)}.`);
    }

    setAmount("");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f0e4] via-[#f4f8f2] to-[#d8e6d1] flex flex-col items-center justify-center p-6 lg:p-10">
      <div className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-3xl p-10 w-full max-w-xl transition-all hover:shadow-[#4b6043]/30 hover:scale-[1.02]">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#4b6043] mb-2">
            Manage Your Transactions
          </h2>
          <p className="text-gray-500 text-sm">Deposit or withdraw money securely</p>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">
            Current Balance
          </p>
          <h3 className="text-6xl font-extrabold text-[#4b6043] mt-2">
            ${balance}
          </h3>
        </div>

        {error && (
          <div className="text-red-600 text-center mb-4 bg-red-50 p-2 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter Amount
            </label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-[#4b6043]/50 focus:border-[#4b6043] text-lg outline-none transition-all"
              placeholder="e.g., 500.00"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleTransaction("credit")}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-5 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all"
            >
              <ArrowDownCircle className="w-5 h-5" />
              Credit Money
            </button>

            <button
              onClick={() => handleTransaction("cashout")}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white py-3 px-5 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all"
            >
              <ArrowUpCircle className="w-5 h-5" />
              Cash Out
            </button>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 px-4 rounded-xl font-semibold mt-2 text-gray-700 hover:bg-gray-100 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
