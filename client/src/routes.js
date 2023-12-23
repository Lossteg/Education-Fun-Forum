import { lazy } from "react";

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Post from "./pages/Post";
import OwnPost from "./pages/OwnPost";
import Profile from "./pages/Profile";
import CommunityHome from "./pages/CommunityHome";
import AllCommunities from "./pages/AllCommunities";
import MyCommunities from "./pages/MyCommunities";

const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const EmailVerifiedMessage = lazy(() => import("./pages/EmailVerifiedMessage"));
const LoginVerified = lazy(() => import("./pages/LoginVerified"));
const AccessDenied = lazy(() => import("./pages/AccessDenied"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
      {
        path: "/my/post/:postId",
        element: <OwnPost />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/community/:communityName",
        element: <CommunityHome />,
      },
      {
        path: "/communities",
        element: <AllCommunities />,
      },
      {
        path: "/my-communities",
        element: <MyCommunities />,
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
      {
        path: "/access-denied",
        element: <AccessDenied />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
];