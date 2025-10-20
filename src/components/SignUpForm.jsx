const SignUpForm = ({ name, setName, phone, setPhone, email, setEmail, password, setPassword, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Phone</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-[#4b6043] text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-[#3b4f36] transition"
    >
      Sign Up
    </button>
  </form>
);
export default SignUpForm;