import DocRow from "./DocRow";
const DocSection = ({ docs }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h3 className="font-semibold text-lg mb-4 text-gray-800">Docs</h3>
    <div className="grid grid-cols-[1fr_120px_100px_20px] text-xs sm:text-sm font-medium text-gray-500 border-b pb-2 mb-2">
      <span>Name</span>
      <span>Status</span>
      <span>Time</span>
      <span></span>
    </div>
    {docs.length > 0 ? (
      docs.map((doc, i) => <DocRow key={i} {...doc} />)
    ) : (
      <p className="text-gray-500 text-sm mt-3">No documents available.</p>
    )}
  </div>
);

export default DocSection;