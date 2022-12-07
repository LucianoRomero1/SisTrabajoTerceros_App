import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react/lib/esm/components/Navbar/Navbar";
import { Dropdown } from "flowbite-react/lib/esm/components/Dropdown/Dropdown";
import { Avatar } from "flowbite-react/lib/esm/components/Avatar/Avatar";

export const Nav = () => {
  return (
    <>
      <nav class="bg-basso-red">
        <div class="max-w-screen-xl py-5 mr-0 md:px-6">
          <div class="flex items-right">
            <ul class="flex flex-row mt-0 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  class="text-white dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-white dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-white dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-white dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
