import { BrowserRouter, useRoutes } from "react-router-dom";
import { useContext } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import Budgeting from "./pages/Budgeting";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout,";
import Auth from "./pages/Auth";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/transactions", element: <Transactions /> },
        { path: "/budgeting", element: <Budgeting /> },
        { path: "/categories", element: <Categories /> },
        { path: "/settings", element: <Settings /> },
      ],
      guard: isAuthenticated,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [{ index: true, element: <Auth /> }],
    },
  ]);
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
