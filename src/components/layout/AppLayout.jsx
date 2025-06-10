import { Outlet } from "react-router-dom";
import { Footers } from "../../pages/Footers";
import { Headers } from "../../pages/Headers";

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  );
};
