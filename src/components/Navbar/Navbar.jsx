import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const [navitem, setnavitem] = useState(
    localStorage.getItem("navitem") ? localStorage.getItem("navitem") : "Home"
  );
  const [menu, setmenu] = useState(
    localStorage.getItem("menu") === "true" ? true : false
  );

  const menuitems = [
    {
      id: 1,
      item: "Home",
      link: "/",
    },
    {
      id: 2,
      item: "Services",
      link: "/services",
    },
    {
      id: 3,
      item: "Project",
      link: "/projects",
    },
    {
      id: 4,
      item: "About us",
      link: "/about",
    },
  ];

  useEffect(() => {
    localStorage.setItem("menu", menu);
  }, [menu]);
  useEffect(() => {
    localStorage.setItem("navitem", navitem);
  }, [navitem]);
  // console.log(menu);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = menuitems.find(item => item.link === currentPath)?.item;
    if (currentItem) {
      setnavitem(currentItem);
    }
  }, [location.pathname]);

  const currentPath = location.pathname;
  const currentItem = menuitems.find(item => item.link === currentPath)?.item;
  console.log(currentItem)


  return (
    <>
      <nav
        className={`sm:block hidden ${
          menu
            ? "sm:bg-[#412675] bg-white rounded-b-[60px]"
            : "bg-white rounded-none"
        } text-white w-full h-[95px]  `}
      >
        {menu ? (
          <div className="sm:flex hidden duration-200  justify-between items-center lg:px-10 md:px-5 sm:px-5">
            <div className=" left-nav flex items-center sm:gap-5 md:gap-5 lg:gap-10">
              <div className="logo cursor-pointer">
                <Link to={"/"}>
                  {" "}
                  <img
                    src={assets.logo}
                    className="sm:w-[95px] w-[100px] md:w-[100px]"
                    alt=""
                  />
                </Link>
              </div>
              <ul className="flex items-center mb-2 text-white sm:gap-1 md:gap-3">
                {menuitems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setnavitem(item.item)}
                    className={`cursor-pointer flex items-center sm:px-2 md:px-3 sm:py-[1.5px] md:py-[2px] duration-200 ${
                      navitem === item.item ? "text-blue-950 bg-white" : ""
                    } rounded-[8px]`}
                  >
                    <Link to={item.link}>{item.item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" right-nav flex items-center sm:gap-5 md:gap-5 lg:gap-10 pr-5">
              <p className="cursor-pointer sm:mb-2 md:mb-2 lg:mb-0">
                Contact us
              </p>
              <NavbarMenu menu={menu} setmenu={setmenu} />
            </div>
          </div>
        ) : (
          <div className="text-black px-4 md:px-7 sm:px-5 lg:px-10 duration-300 sm:flex hidden items-center justify-between">
            <div className="logo cursor-pointer">
              <Link to={"/"}>
                <img src={assets.logodark} className="w-[100px]" alt="" />
              </Link>
            </div>
            <div className="md:mr-5 mr-2">
              <NavbarMenu menu={menu} setmenu={setmenu} />
            </div>
          </div>
        )}
      </nav>

      <nav
        className={` sm:hidden block bg-white ${
          menu ? "" : ""
        } text-white w-full h-[95px] relative `}
      >
        <div className="text-black px-4 md:px-7 sm:px-5 lg:px-10 duration-300 flex  items-center justify-between">
          <div className="logo cursor-pointer">
            <Link to={"/"}>
              <img src={assets.logodark} className="w-[100px]" alt="" />
            </Link>
          </div>
          <div className="md:mr-5 mr-2 z-50">
            <NavbarMenu menu={menu} setmenu={setmenu} />
          </div>
        </div>
        {menu ? (
          <div className="sidebar  rounded-s-[40px] flex items-center justify-center absolute right-0 top-0 w-[50%] bg-blue-700 h-[100vh] text-black">
            <div className="w-full h-full  relative ">
              <div className=" flex flex-col gap-7 justify-center w-full h-[80vh] ">
                {menuitems.map((item, index) => (
                  <Link
                    to={item.link}
                    onClick={() => setnavitem(item.item)}
                    key={index}
                    className={`z-20 py-2 px-5 cursor-pointer ${
                      navitem === item.item
                        ? "text-blue-950 bg-white"
                        : "text-white"
                    }`}
                  >
                    {item.item}
                  </Link>
                ))}
              </div>

              <img
                src={assets.sidebar_background}
                className="navbar-sidebar-background-img object-cover absolute  w-full z-10 top-0 rounded-s-[40px] h-full"
                alt=""
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Navbar;
