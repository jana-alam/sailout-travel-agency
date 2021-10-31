import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../images/sailout-logo.png";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };

  return (
    <Disclosure as="nav" className="md:py-6">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    className="block lg:hidden h-8 w-auto sm:ml-10 md:ml-2"
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
                    <NavLink
                      activeClassName="text-cyan-400 font-semibold"
                      className="text-gray-600"
                      to="/home"
                    >
                      Home
                    </NavLink>
                    {user?.email && (
                      <>
                        <NavLink
                          activeClassName="text-cyan-400"
                          className="text-gray-600"
                          to="/my-bookings"
                        >
                          My Bookings
                        </NavLink>
                        <NavLink
                          activeClassName="text-cyan-400"
                          className="text-gray-600"
                          to="/all-bookings"
                        >
                          All Bookings
                        </NavLink>
                        <NavLink
                          activeClassName="text-cyan-400"
                          className="text-gray-600"
                          to="/add-tour"
                        >
                          Add Tour
                        </NavLink>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0  hidden md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user?.email ? (
                  <div className="flex items-center">
                    <span className="mr-2 font-semibold">
                      {user?.displayName}
                    </span>
                    <button
                      onClick={handleLogOut}
                      type="button"
                      className="px-3 py-2 rounded-2xl bg-red-400 text-white"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div>
                    <NavLink activeClassName="text-cyan-400" to="/login">
                      Login
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Mobile Menus */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-2 grid grid-cols-1 gap-2 divide-y-2 divide-cyan-400">
              <NavLink to="/home">
                <Disclosure.Button>Home</Disclosure.Button>
              </NavLink>
              {user?.email ? (
                <>
                  <NavLink
                    activeClassName="text-cyan-400"
                    className="text-gray-600"
                    to="/my-bookings"
                  >
                    My Bookings
                  </NavLink>
                  <NavLink
                    activeClassName="text-cyan-400"
                    className="text-gray-600"
                    to="/all-bookings"
                  >
                    All Bookings
                  </NavLink>
                  <NavLink
                    activeClassName="text-cyan-400"
                    className="text-gray-600"
                    to="/add-tour"
                  >
                    Add Tour
                  </NavLink>
                  <div className="flex items-center">
                    <p className="mr-2 font-semibold">{user?.displayName}</p>
                    <button
                      onClick={handleLogOut}
                      type="button"
                      className="px-3 py-2 rounded-2xl bg-red-400 text-white"
                    >
                      Log out
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  <NavLink activeClassName="text-cyan-400" to="/login">
                    Login
                  </NavLink>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
