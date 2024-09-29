import { createBrowserRouter } from "react-router-dom";

// pages
import LoginPage from "@pages/login/LoginPage";
import MainPage from "@pages/main/MainPages";
import FaqPage from "@pages/faq/FaqPage";
import DefaultPageLayout from "@layouts/DefaultPageLayout";

const router = createBrowserRouter([
  // public page
  { path: "/login", children: [{ path: "", element: <LoginPage /> }] },

  // private page
  {
    path: "/",
    element: <DefaultPageLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "faq", element: <FaqPage /> },
    ],
  },
]);

export default router;
