import { useNavigate } from "react-router-dom";
import { useBankStore } from "../store/bankStore";
import DashboardHeader from "../components/DashboardHeader";
import LoanSection from "../components/LoanSection";
import DocSection from "../components/DocSection";
import Statistics from "../components/Statistics";
const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = useBankStore((state) => state.currentUser);
  const signOut = useBankStore((state) => state.signOut);
const Info = currentUser?.dashboard?.Info || [];
const docs = currentUser?.dashboard?.docs || [];
  const userName = currentUser?.name || "User";
  const totalValue = Info[2].amount;
  const InfoCards = Info.map((Info) => {
    return { ...Info, icon: Info.icon|| Info.icon };
  });
  const handleTransactionsClick = () => navigate("/transactions");
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-6 bg-gray-50">
      <DashboardHeader
        userName={userName}
        onTransactionsClick={handleTransactionsClick}
        onSignOut={signOut}
      />
      <LoanSection totalValue={totalValue} InfoCards={InfoCards} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_300px] gap-6 w-full">
        <DocSection docs={docs} />
        <Statistics />
      </section>
    </main>
  );
};
export default Dashboard;
