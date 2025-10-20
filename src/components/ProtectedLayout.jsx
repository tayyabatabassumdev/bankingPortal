import Sidebar from "./Sidebar";
const ProtectedLayout = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-screen bg-gray-50">
    <Sidebar />
    <main>{children}</main>
  </div>
);
export default ProtectedLayout;
