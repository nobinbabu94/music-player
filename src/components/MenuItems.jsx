import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

const MenuItems = (props) => {
    const location = useLocation();
  const { icon, title,to } = props;

    const isActive = location.pathname === to;
var bgColor = ''
    const btnClass = isActive ? bgColor='bg-gray-300' :  bgColor=''
  return (
    <Link to={to}>
      <div className={`flex flex-col items-center justify-center text-white rounded-lg px-1 py-2 gap-1 bg-opacity-30 ${btnClass}`}>
        <IconContext.Provider value={{ size: "24px" }}>
          {icon}
        </IconContext.Provider>
        <p className="m-auto text-xs font-bold">{title}</p>
      </div>
    </Link>
  );
};

export default MenuItems;
