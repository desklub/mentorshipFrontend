import React from "react";
import axios from "axios";
import { useState } from "react";
import { useShopContext } from "../context";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  interface loginResponse {
    token: string;
    user: {
      id: string;
      name?: string;
      email: string;
      role: string;
    };
  }
  const context = useShopContext();
  const backendUrl = context?.backendUrl || "";

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post<loginResponse>(
        `${backendUrl}/api/auth/login`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        navigate("/");
      }
      // if(response.data.user.role === "admin") {
      //   navigate("/admin")
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-10 justify-self-center mx-auto ">
      <h1 className="justify-self-center justify-center font-bold text-2-3xl">
        Mentorship login page
      </h1>
      <form
        className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg"
        onSubmit={submit}
      >
        <h1 className="text-xl font-bold text-center">Login to your account</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus-ring-2 focus::ring-blue-500"
          />
          <div className="mt-5">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus-ring-2 focus::ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="right-3 top-9 mt-5 text-2xl bg-blue-500 p-5 rounded focus:outline-none hover:bg-blue-900"
          >
            login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
