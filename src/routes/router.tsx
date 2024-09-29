import { createBrowserRouter } from "react-router-dom";

// pages
import LoginPage from "@pages/login/LoginPage";
import MainPage from "@pages/main/MainPages";
import FaqPage from "@pages/faq/FaqPage";

const router = createBrowserRouter([
  // public page
  { path: "/login", children: [{ path: "", element: <LoginPage /> }] },

  // private page
  { path: "/", children: [{ path: "", element: <MainPage /> }] },
  { path: "/faq", children: [{ path: "", element: <FaqPage /> }] },
]);

export default router;
