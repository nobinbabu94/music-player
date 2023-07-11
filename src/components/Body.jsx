import React from "react";
import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

const Body = () => {
  return (
    
      <div className="bg-[#13c0cc] w-[95vw] text-white rounded-[30px] box-content ">
        <Outlet/>
      </div>
  
  );
};
export default Body;
