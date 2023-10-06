import { useState } from "react";
import { useAuth } from "./hooks/useAuth";

const LoginForm = () => {
  const { dispatch } = useAuth();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    if (credentials.username.trim() && credentials.password.trim() !== "") {
      const token = Math.floor(Math.random() * 1000000000000);
      dispatch({ type: "LOGIN", token });
    }
  };

  return (
    <div className="w-1/3 p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Login</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-2 font-medium text-gray-600"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-gray-600"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
