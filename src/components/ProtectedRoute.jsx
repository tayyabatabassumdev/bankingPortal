import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useBankStore } from '../store/bankStore';
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useBankStore(state => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};
export default ProtectedRoute