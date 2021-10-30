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
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="py-4 bg-cyan-50 space-y-8 flex flex-col items-center justify-center text-center">
          <h1 className="font-satisfy text-3xl md:text-5xl  text-cyan-400">
            Please Login{" "}
          </h1>
          <div>
            <button
              onClick={handleLogin}
              className="p-2 text-white bg-cyan-600 w-80"
            >
              Google
            </button>
          </div>
        </div>
        <img
          className="md:col-span-2"
          src="https://i.ibb.co/HGswJv3/hill.jpg"
          alt="slider"
        />
      </div>
    </>
  );
};

export default Login;
