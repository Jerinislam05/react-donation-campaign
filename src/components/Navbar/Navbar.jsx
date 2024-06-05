import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to='/home'>Home</NavLink></li>
      <li><NavLink to='/donation'>Donation</NavLink></li>
      <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </>
  );
  return (
    <div className="flex bg-gray-100 items-center justify-between px-4 rounded-t-xl">
      <img src="https://i.postimg.cc/BQ2k1hNL/Logo.png" alt="" />
      <div className="ml-auto">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
