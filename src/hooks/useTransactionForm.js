import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useBankStore } from "../store/bankStore";
const useTransactionForm = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const currentUser = useBankStore((s) => s.currentUser);
  const creditMoney = useBankStore((s) => s.creditMoney);
  const cashOutMoney = useBankStore((s) => s.cashOutMoney);
  const showSuccess = (msg) => toast.success(msg, { duration: 3000 });
  const showError = (msg) => toast.error(msg, { duration: 4000 });
  const balance = currentUser?.balance
    ? Number(currentUser.balance).toFixed(2)
    : "0.00";
  const handleTransaction = (type) => {
    setError("");
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Please enter a valid amount greater than zero.");
      showError("Invalid amount");
      return;
    }
    if (type === "credit") {
      creditMoney(numAmount);
      showSuccess(`Credited $${numAmount.toFixed(2)}`);
    } else if (type === "cashout") {
      if (!currentUser || numAmount > Number(currentUser.balance)) {
        setError("Cash out amount exceeds current balance.");
        showError("Insufficient balance");
        return;
      }
      cashOutMoney(numAmount);
      showSuccess(`Cashed out $${numAmount.toFixed(2)}`);
    }
    setAmount("");
    setTimeout(() => navigate("/dashboard"), 400);
  };
  return {
    amount,
    setAmount,
    error,
    balance,
    handleTransaction,
  };
};
export default useTransactionForm;
