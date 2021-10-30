/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { singInGoogle, user } = useAuth();

  const histoty = useHistory();
  const location = useLocation();
  const rediract = location.state?.from || "/";

  useEffect(() => {
    user?.email ? histoty.push(rediract) : "";
  }, [user, histoty, rediract]);
  return (
    <div className="container py-5">
      <h1>Login Page</h1>
      <button onClick={singInGoogle} className="btn btn-danger">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
