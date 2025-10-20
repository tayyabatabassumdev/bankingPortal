const BalanceCard = ({ balance }) => (
  <div
    className="relative overflow-hidden text-white p-5 rounded-xl shadow-lg h-34 w-full bg-cover bg-center mt-8"
    style={{
      background: "linear-gradient(135deg, #5D3FD3 0%, #8A2BE2 100%)",
    }}
  >
    <div
      className="absolute inset-0 opacity-20"
      style={{
        background: "radial-gradient(circle, #fff 1px, transparent 1px) no-repeat",
        backgroundSize: "15px 15px",
        filter: "blur(0.5px)",
      }}
    ></div>
    <div className="relative z-10 flex flex-col h-full justify-between">
      <div className="flex justify-between items-start">
        <p className="text-sm opacity-80 font-medium">Balance</p>
        <p className="text-sm font-bold">VISA</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-3xl font-extrabold mb-1">
          ${balance?.toFixed(2) ?? '0.00'}
        </h3>
        <p className="text-sm font-medium opacity-90 mt-1">**** 5008</p>
      </div>
    </div>
  </div>
);
export default BalanceCard;