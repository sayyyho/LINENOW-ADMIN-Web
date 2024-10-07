import { createBrowserRouter } from "react-router-dom";

// pages
import LoginPage from "@pages/login/LoginPage";
import MainPage from "@pages/main/MainPages";
import FaqPage from "@pages/faq/FaqPage";
import DefaultLayout from "@layouts/DefaultLayout";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import { OnboardingPage } from "@pages/onboarding/Onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          { path: "/", element: <MainPage /> },
          { path: "/faq", element: <FaqPage /> },
          { path: "/onboarding", element: <OnboardingPage /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <GuestRoute />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
]);

export default router;
