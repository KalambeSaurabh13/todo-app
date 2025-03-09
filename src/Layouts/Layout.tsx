import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="h-screen relative bg-gray-100 ">
      <div className=" absolute z-10 top-0 left-0 right-0">
      <Header />
      </div>

      <div className="flex ">
        <div className="w-1/5 mt-15">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-15">
          <main className=" h-[85vh] ">
            <Outlet />
          </main>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
