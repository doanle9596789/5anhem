import React from "react";
import {useNavigate} from "react-router-dom";
import HomePage from "../public/HomePage";
export default function Logout() {
    const navigate=useNavigate();
  localStorage.clear();
  return(
      <HomePage/>
  )
}