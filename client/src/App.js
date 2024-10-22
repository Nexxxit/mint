import { BrowserRouter, useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import Budgeting from "./pages/Budgeting";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import AuthProvider from "./contexts/AuthProvider";

const AppRoutes = () => {

  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
        { path: "/transactions", element: <ProtectedRoute><Transactions /></ProtectedRoute> },
        { path: "/budgeting", element: <ProtectedRoute><Budgeting /></ProtectedRoute> },
        { path: "/categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: "/settings", element: <ProtectedRoute><Settings /></ProtectedRoute> },
      ],
    },
    {
      path: "/auth",
      element: <MainLayout />,
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
