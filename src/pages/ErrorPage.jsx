import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Oops! 404</h1>
      <p>Seems like you have gotten to the wrong page!</p>
    </div>
  );
};

export default ErrorPage;
