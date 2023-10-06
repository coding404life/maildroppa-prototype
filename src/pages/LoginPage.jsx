import { Link } from "react-router-dom";
import LoginForm from "../LoginForm";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { state, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="mb-4 text-2xl">Login Page</h1>

      {!state.isAuthenticated && <p>Login to see the private page route</p>}

      {state.isAuthenticated && (
        <>
          <p className="mb-2">Go to Private page</p>
          <Link
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            to="/private"
          >
            Private Page
          </Link>
        </>
      )}

      <div className="mb-4 " />

      {state.isAuthenticated ? (
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
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default LoginPage;
