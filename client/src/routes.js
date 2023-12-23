import { lazy } from "react";

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Post from "./pages/Post";

const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const EmailVerifiedMessage = lazy(() => import("./pages/EmailVerifiedMessage"));
const LoginVerified = lazy(() => import("./pages/LoginVerified"));

export const privateRoutes = [
    {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/post/:postId",
        element: <Post />,
      },
];

export const publicRoutes = [
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
        path: "/auth/verify",
        element: <VerifyEmail />,
      },
      {
        path: "/email-verified",
        element: <EmailVerifiedMessage />,
      },
      {
        path: "/verify-login",
        element: <LoginVerified />,
      },
];