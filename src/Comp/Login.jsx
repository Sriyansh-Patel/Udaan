import Nab from "./Nab";
import Footer from "./Foot";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Role:", role);
    console.log("Email:", email);
    console.log("Password:", password);
    // Handle login logic here (API call, validation, etc.)
  };

  return (
    <div className="flex flex-col min-h-screen" data-theme="light">
      <Nab />

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center p-5 bg-gray-100 p-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          
          <form onSubmit={handleLogin}>
            {/* Role Selection */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Select Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <a href="#" className="text-blue-600 font-semibold">Sign up</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
