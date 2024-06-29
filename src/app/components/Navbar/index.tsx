"use client";

import * as Import from "./imports";
import LogoNinja from "../../assets/navbar/logo-ninja.png";
import Chat from "../../assets/navbar/chat.svg";
import Cart from "../../assets/navbar/cart.svg";
import Favorite from "../../assets/navbar/favorite.svg";
import Accessibility from "../../assets/navbar/accessibility.svg";
import Image from "next/image";
import "./styles.scss";
import { SearchInput } from "./SearchInput";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../nav";
import { useState } from "react";

export function NavbarComponent() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
      <div
        className={`w-dvw h-dvh fixed z-10 modal ${isActive ? "" : "hidden"}`}
        onClick={() => setIsActive(!isActive)}
      ></div>
      <nav className="navbar p-3">
        <Import.Navbar fluid rounded className="container m-auto">
          <div
            className={`${isActive ? "buttonActive" : ""} button cursor-pointer`}
            onClick={() => setIsActive(!isActive)}
          >
            <span className={`${isActive ? "topActive" : ""} top`}></span>
            <span className={`${isActive ? "midActive" : ""} mid`}></span>
            <span className={`${isActive ? "botActive" : ""} bot`}></span>
          </div>
          <Import.NavbarBrand href="#">
            <Image
              src={LogoNinja}
              className="mr-3 h-16 w-16"
              alt="Flowbite React Logo"
            />
          </Import.NavbarBrand>
          <SearchInput className="input-container" />
          <div className="flex lg:order-2">
            <Import.Dropdown
              arrowIcon={false}
              inline
              label={
                <Import.Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Import.DropdownHeader>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Import.DropdownHeader>
              <Import.DropdownItem>Dashboard</Import.DropdownItem>
              <Import.DropdownItem>Settings</Import.DropdownItem>
              <Import.DropdownItem>Earnings</Import.DropdownItem>
              <Import.DropdownDivider />
              <Import.DropdownItem>Sign out</Import.DropdownItem>
            </Import.Dropdown>
          </div>
          <div className="p-3 hidden md:flex">
            <Image
              src={Chat}
              alt="Chat icon"
              width={24}
              height={24}
              className="m-3 cursor-pointer"
            />
            <Image
              src={Favorite}
              alt="Chat icon"
              width={24}
              height={24}
              className="m-3 cursor-pointer"
            />
            <Image
              src={Cart}
              alt="Chat icon"
              width={28}
              height={28}
              className="m-3 cursor-pointer"
            />
            <Image
              src={Accessibility}
              alt="Chat icon"
              width={28}
              height={28}
              className="m-3 cursor-pointer"
            />
          </div>
        </Import.Navbar>
        <SearchInput className="hidden-input-container mx-5" />
      </nav>
    </>
  );
}
