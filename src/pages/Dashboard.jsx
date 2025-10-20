import { useNavigate } from "react-router-dom";
import { useBankStore } from "../store/bankStore";
import DashboardHeader from "../components/DashboardHeader";
import LoanSection from "../components/LoanSection";
import DocSection from "../components/DocSection";
import Statistics from "../components/Statistics";
import house from "../assets/house.jpeg";
import bank from "../assets/bank.jpeg";
import car from "../assets/car.png";
const mockLoans = [
  { icon: house, title: "Family house loan", amount: "-$120,000" },
  { icon: bank, title: "Eurotrip loan", amount: "-$21,489" },
  { icon: car, title: "Car loan", amount: "-$2,312" },
];
const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = useBankStore((state) => state.currentUser);
  const signOut = useBankStore((state) => state.signOut);
  const loans = useBankStore((state) => state.loans) || mockLoans;
  const docs = useBankStore((state) => state.docs) || [];
  const userName = currentUser?.name || "User";
  const totalLoanValue = "$6,202";
  const loanCards = loans.map((loan) => {
    const iconMap = {
      "/src/assets/house.jpeg": house,
      "/src/assets/bank.jpeg": bank,
      "/src/assets/car.png": car,
    };
    return { ...loan, icon: iconMap[loan.icon] || loan.icon };
  });
  const handleTransactionsClick = () => navigate("/transactions");
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-6 bg-gray-50">
      <DashboardHeader
        userName={userName}
        onTransactionsClick={handleTransactionsClick}
        onSignOut={signOut}
      />
      <LoanSection totalLoanValue={totalLoanValue} loanCards={loanCards} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_300px] gap-6 w-full">
        <DocSection docs={docs} />
        <Statistics />
      </section>
    </main>
  );
};
export default Dashboard;
