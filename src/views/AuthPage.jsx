import React, { useState } from 'react';
import { useBankStore } from '../store/bankStore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'signin'; // Default to signin

  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const signIn = useBankStore(state => state.signIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'signin') {
      const success = signIn(email, password);
      if (success) {
        navigate('/dashboard', { replace: true });
      } else {
        setError('Invalid credentials. Use test@example.com / password.');
      }
    } else {
      // Sign-up logic is optional per spec. We'll simulate a success.
      alert('Sign Up successful! Redirecting to Sign In. (Functionality is mock)');
      navigate('/auth?mode=signin', { replace: true });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </h2>
        
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4b6043] focus:border-[#4b6043]"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#4b6043] focus:border-[#4b6043]"
              required 
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#4b6043] text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-[#3b4f36] transition"
          >
            {mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
          <Link 
            to={`/auth?mode=${mode === 'signin' ? 'signup' : 'signin'}`}
            className="text-[#4b6043] font-medium hover:underline"
          >
            {mode === 'signin' ? 'Sign Up' : 'Sign In'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;