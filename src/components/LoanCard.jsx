const LoanCard = ({ icon, title, amount }) => {
  return (
    <div className="bg-gray-100 rounded-sm p-5 shadow-sm flex flex-col items-start min-h-[180px] justify-between">
      <div className="mb-4">
        <div className="w-10 h-10 flex items-center justify-center mb-2">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain rounded-xs"
          />
        </div>
        <h4 className="text-sm font-semibold text-gray-500">{title}</h4>
      </div>
      <div className="mt-auto mb-4">
        <p className={`text-3xl font-bold mb-1`}>{amount}</p>
        <p className="text-xs text-gray-500">Balance owing</p>
      </div>
    </div>
  );
};
export default LoanCard;
