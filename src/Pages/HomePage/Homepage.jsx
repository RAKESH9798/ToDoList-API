import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  reFatchAlltasksToggle,
  toggle,
  user,
} from "../../Redux/User/UserSlice";
import HomePage from "../../Components/HomePages/HomePage";
const Homepage = () => {
  let token = localStorage.getItem("TOKEN");
  const navigate = useNavigate();
  const userToggle = useSelector(toggle);
  const handleNavigateToLoginPage = (route) => {
    navigate(route);
  };

  useEffect(() => {
    if (!token) {
      handleNavigateToLoginPage("/login");
    }
  }, [userToggle]);

  if (token) {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
};

export default Homepage;
