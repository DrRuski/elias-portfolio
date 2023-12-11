import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout() {
  return (
    <div className="flex flex-col gap-[25px] lg:gap-[75px]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
