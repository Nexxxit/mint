import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="container-fluid ps-5 pe-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
