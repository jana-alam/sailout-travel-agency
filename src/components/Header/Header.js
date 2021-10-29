import React from "react";
import { Disclosure } from "@headlessui/react";
import { LogoutIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../images/sailout-logo.png";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

// const navigation = [
//   { name: "Home", href: "#", current: true },
//   { name: "My Order", href: "#", current: false },
//   { name: "Manage All Order", href: "#", current: false },
//   { name: "Add Travel", href: "#", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <Disclosure as="nav" className="md:py-2">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
                {/* Logo on Header */}
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="sailout"
                  />

                  <img
                    className="hidden lg:block w-auto"
                    src={logo}
                    alt="sailout"
                  />
                </div>
                {/* Nav Links*/}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/my-bookings">My Bookings</NavLink>
                    {user?.email && (
                      <>
                        <NavLink to="/my-bookings">My Bookings</NavLink>
                        <NavLink to="/my-bookings">My Bookings</NavLink>
                        <NavLink to="/my-bookings">My Bookings</NavLink>
                      </>
                    )}
                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-cyan-400"
                            : " hover:bg-cyan-50 hover:text-cyan-600",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user?.email ? (
                  <div>
                    <span className="mr-2 text-yellow-400 font-bold">
                      {user?.displayName}
                    </span>
                    <button
                      onClick={handleLogOut}
                      type="button"
                      className="p-2 rounded-2xl bg-cyan-400 text-white"
                    >
                      <LogoutIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">Login</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
