import React from "react";
import MenuItems from "./MenuItems";
import { MdSpaceDashboard } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div
      className="bg-[#fa5e5e] h-screen text-white rounded-l-[30px] p-2 box-content flex flex-col 
    justify-around items-center"
    >
      <div className="rounded-lg ">
        <img
          style={{ borderRadius: 50,width:'45px' }}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
          }
          className="profile-img"
          alt="profile"
        />
      </div>
      <div className="flex flex-col">
        <MenuItems title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <MenuItems title="Trending" to="/trending" icon={<FaGripfire />} />
        <MenuItems title="Player" to="/player" icon={<FaPlay />} />
        <MenuItems title="Favourites" to="/favourites" icon={<MdFavorite />} />
        <MenuItems title="Library" to="/library" icon={<IoLibrary />} />
        
      </div>
      <div className="flex flex-col gap-1 shrink-0 w-full">
      <MenuItems title="Sign Out" to="" icon={<FaSignOutAlt />} />
      </div>
    </div>
  );
};

export default Sidebar;
