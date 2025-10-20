
import LoanCard from "./LoanCard";
const LoanSection = ({ totalLoanValue, loanCards }) => (
  <section className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
      Loans
    </h2>
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
          {totalLoanValue}
        </h2>
        <p className="text-gray-500 text-sm mb-5 max-w-xs">
          I tried to reflect that vision within dark spirit to outline the
          seriousness of intention that bank.
        </p>
        <button className="bg-[#4b6043] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#3b4f36] transition w-full max-w-[200px]">
          View details
        </button>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loanCards.map((loan, index) => (
          <LoanCard
            key={index}
            icon={loan.icon}
            title={loan.title}
            amount={loan.amount}
          />
        ))}
      </div>
    </div>
  </section>
);
export default LoanSection;