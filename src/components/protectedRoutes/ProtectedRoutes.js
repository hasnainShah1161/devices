import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoutes({ component: Component, ...rest }) {
  const jsonWebToken = localStorage.getItem("jwt");
  return (
    <Route
      {...rest}
      render={props =>
        jsonWebToken ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
