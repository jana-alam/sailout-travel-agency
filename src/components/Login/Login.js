import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignIn } = useAuth();
  const handleLogin = () => {
    googleSignIn()
      .then((result) => {
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
