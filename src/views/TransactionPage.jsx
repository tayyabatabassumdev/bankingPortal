import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import useTransactionForm from "../hooks/useTransactionForm";
import TransactionForm from "../components/TransactionForm";
const TransactionPage = () => {
  const navigate = useNavigate();
  const { amount, setAmount, error, balance, handleTransaction } =
    useTransactionForm();
  const handleBack = () => navigate("/dashboard");
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <Toaster position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.32 }}
        className="w-full max-w-xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-2xl p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-[#274b2e]">
              Transactions
            </h1>
            <p className="text-sm text-gray-500">
              Add or withdraw funds securely
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Available Balance</p>
            <p className="text-3xl font-bold text-[#274b2e]">${balance}</p>
          </div>
        </div>
        {error && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-100 p-3 text-center text-sm text-red-700">
            {error}
          </div>
        )}
        <TransactionForm
          amount={amount}
          setAmount={setAmount}
          handleTransaction={handleTransaction}
          onBack={handleBack}
        />
      </motion.div>
    </div>
  );
};
export default TransactionPage;
