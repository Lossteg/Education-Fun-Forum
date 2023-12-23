import { lazy } from "react";

import SignUp from "./pages/SignUp";

const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const EmailVerifiedMessage = lazy(() => import("./pages/EmailVerifiedMessage"));
const LoginVerified = lazy(() => import("./pages/LoginVerified"));

export const privateRoutes = [

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