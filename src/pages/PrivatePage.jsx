import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const PrivatePage = () => {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    if (!state.isAuthenticated) navigate("/");
  }, [navigate, state.isAuthenticated]);

  if (!state.isAuthenticated) return null;

  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="mb-4 text-2xl">Private Page</h1>

      <p>Hi Marcus!</p>

      <div className="mt-10 ">
        <p className="mb-2">you are logged in, you can logout</p>
        <button
          type="button"
          onClick={handleLogout}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default PrivatePage;
