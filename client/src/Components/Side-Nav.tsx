import {
  ChartSpline,
  LayoutDashboard,
  StickyNote,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function SideNav() {
  let listItems = [
    { to: "/", name: "Dashboard", key: "dashboard", icon: LayoutDashboard },
    { to: "/cashflow", name: "Cash Flow", key: "cashflow", icon: ChartSpline },
    {
      to: "/balancesheet",
      name: "Balance Sheet",
      key: "balancesheet",
      icon: StickyNote,
    },
    {
      to: "/admin/accGroup",
      name: "Account Groups",
      key: "accGroup",
      icon: UserRound,
    },
  ];

  return (
    <div className="side-nav text-white w-80 list-none border-r-1 shadow-lg h-screen bg-[#3671D9] text-white font-semibold">
      <div className="pl-6 pt-6">
        <div className="top-row flex items-center gap-4">
          <div className="logo">
            <img
              className="w-16"
              src="src/Components/img/openbooklogo.png"
              alt="Logo"
            />
          </div>
          <h1 className="text-xl font-bold">OPEN BOOK</h1>
        </div>
      </div>

      <div className="list mt-8 grid gap-y-4 ">
        {listItems.map((item) => (
          <NavLink
            to={item.to}
            key={item.key}
            className={({ isActive }) =>
              `flex items-center gap-4 pl-6 py-3 text-lg ${isActive ? "bg-[#ffff] text-[#3671D9]" : "hover:bg-[#2B5CB8]"}`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
