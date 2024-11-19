import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Public Area</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
