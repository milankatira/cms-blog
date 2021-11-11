import React, { Children } from "react";
import { Header } from "./";
const Layout = ({Children}) => {
  return (
    <div>
      <Header />
      {Children}
    </div>
  );
};

export default Layout;
