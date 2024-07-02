'use client'

import * as Import from './imports'
import * as Assets from './assets'
import Image from 'next/image'
import './styles.scss'
import Nav from '../Nav/index'
import { useState } from 'react'

export function NavbarComponent() {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <>
      <Import.AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </Import.AnimatePresence>
      <div
        className={`w-dvw h-dvh fixed z-10 modal ${isActive ? '' : 'hidden'}`}
        onClick={() => setIsActive(!isActive)}
      ></div>
      <nav className="navbar p-3">
        <Import.Navbar fluid rounded className="container m-auto">
          <div
            className={`${isActive ? 'buttonActive' : ''} button cursor-pointer`}
            onClick={() => setIsActive(!isActive)}
          >
            <span className={`${isActive ? 'topActive' : ''} top`}></span>
            <span className={`${isActive ? 'midActive' : ''} mid`}></span>
            <span className={`${isActive ? 'botActive' : ''} bot`}></span>
          </div>
          <Import.NavbarBrand href="#">
            <Image
              src={Assets.LogoNinja}
              className="mr-3 h-16 w-16"
              alt="Flowbite React Logo"
            />
          </Import.NavbarBrand>
          <Import.SearchInput className="input-container" />
          <div className="flex sm:order-2">
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
              src={Assets.Chat}
              alt="Chat icon"
              width={24}
              height={24}
              className="m-3 cursor-pointer"
            />
            <Image
              src={Assets.Favorite}
              alt="Chat icon"
              width={24}
              height={24}
              className="m-3 cursor-pointer"
            />
            <Image
              src={Assets.Cart}
              alt="Chat icon"
              width={28}
              height={28}
              className="m-3 cursor-pointer"
            />
            <Image
              src={Assets.Accessibility}
              alt="Chat icon"
              width={28}
              height={28}
              className="m-3 cursor-pointer"
            />
          </div>
        </Import.Navbar>
        <Import.SearchInput className="hidden-input-container mx-5" />
      </nav>
    </>
  )
}
