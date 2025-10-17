import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useBankStore } from './store/bankStore';

// Main Views
import LandingPage from './views/LandingPage';
import AuthPage from './views/AuthPage';
import Dashboard from './pages/Dashboard';
import TransactionPage from './views/TransactionPage'; // New view for Credit/Cash Out

// Layout components
import Sidebar from './components/Sidebar'; 

// --- Protected Route Wrapper ---
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useBankStore(state => state.isAuthenticated);
  // Redirect to the sign-in page if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

// --- Main Application Structure ---
const App = () => {
  const isAuthenticated = useBankStore(state => state.isAuthenticated);

  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Authentication Route */}
        <Route path="/auth" element={<AuthPage />} />

        {/* --- Protected Routes (Requires Sign In) --- */}
        <Route 
          path="*" 
          element={
            <ProtectedRoute>
              {/* Main App Layout: Grid for Sidebar and Content */}
              <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-screen bg-gray-50">
                
                {/* Sidebar (Sticky and full height) */}
                <Sidebar /> 
                
                {/* Main Content Area */}
                <main>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transactions" element={<TransactionPage />} />
                    
                    {/* Default redirect after sign-in */}
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                  </Routes>
                </main>

              </div>
            </ProtectedRoute>
          } 
        />
        
      </Routes>
    </Router>
  );
};

export default App;