import { BrowserRouter, useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import Budgeting from "./pages/Budgeting";
import MainLayout from "./layout/MainLayout";

const AppRoutes = () => {
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
    },
  ]);
};

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
