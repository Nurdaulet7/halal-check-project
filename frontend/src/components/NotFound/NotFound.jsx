import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Sorry, we couldn't find the page.</p>

      <NavLink className={"btn-go-home"} to={"/"}>
        Go back home
      </NavLink>
    </div>
  );
};
