import { ReactNode } from "react";
import Nav from "./Nav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Nav />
      <hr className="mb-5" />
      <div className="mx-5 text-lg text-gray-700 dark:text-white">
        {children}
      </div>
    </div>
  );
};

export default Layout;
