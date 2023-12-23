import { useMemo, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInitialAuthState } from "./redux/actions/authActions";

const PrivateRoute = ({ userData }) => {
    const isAuthenticated = useMemo(() => {
      return (userData, accessToken) => {
        return userData && accessToken;
      };
    }, []);
  
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("profile");
    const accessToken = JSON.parse(token)?.accessToken;
  
    useEffect(() => {
      if (!isAuthenticated(userData, accessToken)) {
        dispatch(setInitialAuthState(navigate));
      }
    }, [dispatch, navigate, userData, accessToken, isAuthenticated]);
  
    return <Navigate to="/signin" />
  };
  
  export default PrivateRoute;