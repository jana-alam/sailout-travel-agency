import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirected_url = location?.state?.from || "/home";
  const handleLogin = () => {
    googleSignIn()
      .then((result) => {
        history.push(redirected_url);
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <button onClick={handleLogin} className="p-2 text-white bg-cyan-600">
        Google
      </button>
    </div>
  );
};

export default Login;
